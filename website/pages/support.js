import React from "react"
import { Anchor, Box, Heading, Paragraph } from "dracula-ui"
import styles from "./index.module.css"
import Docs from "../layouts/Docs"

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: "Support",
        description: "Need help? Have an idea? Found a bug?"
      }
    }
  }
}

class Support extends React.Component {
  render() {
    return (
      <Box>
        <Box my="lg">
          <Heading as="h2" size="xl">Questions</Heading>
          <Paragraph>
            Join us on{" "}
            <Anchor
              color="purple"
              hoverColor="purple"
              href="https://discord.gg/vyA9AdqdbK"
            >
              Discord
            </Anchor>{" "}
            to discuss anything about Dracula UI.
          </Paragraph>
          <img
            className={styles.image}
            src="/static/images/support-1.png"
            alt="Dracula UI Discord"
          />
        </Box>
        <Box my="lg">
          <Heading as="h2" size="xl">Ideas</Heading>
          <Paragraph>
            You can suggest new component ideas using{" "}
            <Anchor
              color="purple"
              hoverColor="purple"
              href="https://github.com/dracula/dracula-ui/discussions"
            >
              GitHub Discussions
            </Anchor>
            .
          </Paragraph>
          <img
            className={styles.image}
            src="/static/images/support-2.png"
            alt="GitHub Discussions"
          />
        </Box>
        <Box my="lg">
          <Heading as="h2" size="xl">Bugs</Heading>
          <Paragraph>
            If you find a problem, feel free to open new{" "}
            <Anchor
              color="purple"
              hoverColor="purple"
              href="https://github.com/dracula/dracula-ui/issues"
            >
              GitHub Issues
            </Anchor>
            .
          </Paragraph>
          <img
            className={styles.image}
            src="/static/images/support-3.png"
            alt="GitHub Issues"
          />
        </Box>
      </Box>
    )
  }
}

Support.Layout = Docs

export default Support
