import Head from "next/head"
import React from "react"
import { Anchor, Box, Heading, List, Paragraph } from "../../dist"
import Navigation from "../components/Navigation"
import Theme from "../layouts/Theme"
import styles from "./index.module.css"

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: "Tooling",
        description:
          "How to improve the developer experience in Visual Studio Code"
      }
    }
  }
}

class Tooling extends React.Component {
  render() {
    const { title, description } = this.props.query

    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
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
                <Heading size="heading-1">{title}</Heading>
                <Paragraph className={styles.description} size="md">
                  {description}
                </Paragraph>
                <Box my="lg">
                  <Heading size="heading-2">Built-in Documentation</Heading>
                  <Paragraph>
                    We partnered with{" "}
                    <Anchor
                      color="purple"
                      hoverColor="purple"
                      href="https://letsxd.com/vscode"
                    >
                      Adobe
                    </Anchor>{" "}
                    to create a new way of reading and consuming documentation
                    without ever leaving the code editor. This new format is
                    called{" "}
                    <Anchor
                      color="purple"
                      hoverColor="purple"
                      href="https://github.com/AdobeXD/design-system-package-dsp"
                    >
                      Design System Package (DSP)
                    </Anchor>{" "}
                    and it's open source. Here's a preview:
                  </Paragraph>
                  <img
                    className={styles.image}
                    src="/static/images/tooling-1.png"
                    alt="Dracula UI documentation on VSCode"
                  />
                  <Paragraph>
                    If you want to see the Dracula UI documentation inside
                    Visual Studio Code, follow these steps:
                  </Paragraph>
                  <List color="white" variant="ordered">
                    <li className="drac-text drac-text-white">
                      Install the{" "}
                      <Anchor
                        color="purple"
                        hoverColor="purple"
                        href="https://marketplace.visualstudio.com/items?itemName=Adobe.xd"
                      >
                        Adobe XD extension
                      </Anchor>{" "}
                      on VSCode
                    </li>
                    <li className="drac-text drac-text-white">
                      Click on the "XD" button on the bottom right corner
                    </li>
                    <li className="drac-text drac-text-white">
                      Click on the "Load Package" option
                    </li>
                    <li className="drac-text drac-text-white">
                      Select the <code>dracula-ui/dsp</code> folder
                    </li>
                    <li className="drac-text drac-text-white">
                      Now you should see the documentation
                    </li>
                  </List>
                </Box>
                <Box my="lg">
                  <Heading size="heading-2">Autocomplete</Heading>
                  <Paragraph>
                    In order to have autocomplete enabled on Visual Studio Code
                    you must follow the steps above.
                  </Paragraph>
                  <Paragraph>
                    Once everything is installed, you should see snippets for
                    HTML and JavaScript code. Here's an example with React:
                  </Paragraph>
                  <img
                    className={styles.image}
                    src="/static/images/tooling-2.png"
                    alt="Dracula UI autocomplete on VSCode"
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

Tooling.Layout = Theme

export default Tooling
