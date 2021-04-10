import Head from "next/head"
import React from "react"
import { Anchor, Box, Heading, Paragraph } from "@dracula/dracula-ui"
import Navigation from "../components/Navigation"
import Theme from "../layouts/Theme"
import styles from "./index.module.css"

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

class Design extends React.Component {
  render() {
    const { title, description } = this.props.query

    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>{title} — Dracula UI</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="Netto Farah &amp; Zeno Rocha" name="author" />
        </Head>

        <Box className={styles.container}>
          <Navigation selected={title} />
          <Box className={styles.content} py="lg">
            <main className={styles.center}>
              <Box>
                <Heading as="h1" size="2xl">{title}</Heading>
                <Paragraph className={styles.description} size="md">
                  {description}
                </Paragraph>
                <Box my="lg">
                  <Heading as="h2" size="xl">Questions</Heading>
                  <Paragraph>
                    Join us on{" "}
                    <Anchor
                      color="purple"
                      hoverColor="purple"
                      href="https://discord.gg/584kS9Mg"
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
            </main>
          </Box>
        </Box>
      </div>
    )
  }
}

Design.Layout = Theme

export default Design
