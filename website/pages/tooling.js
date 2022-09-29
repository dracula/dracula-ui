import React from "react"
import { Anchor, Box, Heading, OrderedList, Paragraph } from "dracula-ui"
import styles from "./index.module.css"
import Docs from "../layouts/Docs"

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: "Tooling",
        description:
          "How to improve the developer experience in Visual Studio Code."
      }
    }
  }
}

class Tooling extends React.Component {
  render() {
    return (
      <Box>
        <Box my="lg">
          <Heading as="h2" size="xl">Built-in Documentation</Heading>
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
          <OrderedList color="white">
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
              Select the <code>node_modules/dracula-ui/dsp</code> folder
            </li>
            <li className="drac-text drac-text-white">
              Now you should see the documentation
            </li>
          </OrderedList>
        </Box>
        <Box my="lg">
          <Heading as="h2" size="xl">Autocomplete</Heading>
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
    )
  }
}

Tooling.Layout = Docs

export default Tooling
