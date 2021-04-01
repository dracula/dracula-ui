import { Octokit } from "@octokit/rest"
import { NextApiHandler } from "next"
import Twilio from "twilio"

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const twilio = Twilio(accountSid, authToken)

async function fallback(to, github) {
  return Promise.all([
    twilio.messages.create({
      from: "+17085643218",
      to,
      body: `Dracula UI: ${github}`
    }),

    twilio.calls.create({
      from: "+17085643218",
      to: "+17758638863",
      twiml: `
      <Response>
        <Say>Dracula UI sale: ${github}</Say>
      </Response>
      `
    })
  ])
}

const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
})

const handler: NextApiHandler = async (req, res) => {
  const github = req.body["GitHub username"]

  if (!github) {
    res.status(422)
    res.end()
    return
  }

  await octokit
    .request("PUT /repos/{owner}/{repo}/collaborators/{username}", {
      repo: "@dracula/dracula-ui",
      username: github,
      permission: "triage",
      owner: "dracula"
    })
    .catch(async (err) => {
      console.error(err)

      await Promise.all([
        fallback("+17758638863", github),
        fallback("+19095481593", github)
      ])
    })

  res.status(200).json({ name: "Gumroad!" })
}

export default handler
