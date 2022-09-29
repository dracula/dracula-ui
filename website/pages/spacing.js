import React from "react"
import {
  Box,
  Heading,
  Paragraph,
  spacingUtilities,
  Table,
  Text
} from "dracula-ui"
import Tabs from "../components/Tabs"
import styles from "./index.module.css"
import Docs from "../layouts/Docs"

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: "Spacing",
        description:
          "Learn how to use our spacing helpers to make margin and padding management easier."
      }
    }
  }
}

class Spacing extends React.Component {
  render() {
    return (
      <Box>
        <Box my="lg">
          <Heading as="h2" size="xl" color="cyanGreen">
            Spacing Utilities
          </Heading>
          <Paragraph>
            Dracula UI ships with two spacing utilities that help you define
            padding and margin for your websites and apps. While not required,
            the utility css classes and the{" "}
            <Box as="code" className="drac-text-pink">
              p
            </Box>{" "}
            and{" "}
            <Box as="code" className="drac-text-pink">
              m
            </Box>{" "}
            properties (for React components), help remove the burden of having
            to manage your own spacing classes, properties and variables.
          </Paragraph>
        </Box>

        <Box my="lg">
          <Heading as="h3" size="md">
            Padding
          </Heading>
          <Paragraph>
            The padding css utility classes and{" "}
            <Box as="code" className="drac-text-pink">
              p
            </Box>{" "}
            React property can help manage padding for your components and html
            elements.
          </Paragraph>

          <Tabs
            section={{
              title: "Usage",
              html:
                '<div class="drac-box drac-bg-pink drac-p-md">\n  <div class="drac-box">\n    <span class="drac-text drac-line-height drac-text-black">Padding</span>\n  </div>\n</div>\n',
              react:
                '<Box p="md" color="pink">\n  <Box>\n    <Text>Padding</Text>\n  </Box>\n</Box>;\n',
              docs: "",
              screenshot: "./dsp/assets/Spacing.png"
            }}
          />

          <Paragraph pt="md">
            Add the{" "}
            <Box as="code" className="drac-text-pink">
              p
            </Box>{" "}
            property at the top level of any Dracula UI react component for easy
            and type safe padding management. For HTML only websites, apply the{" "}
            <Box as="code" className="drac-text-pink">
              .drac-p
            </Box>{" "}
            css utilty classes directly into your code.
          </Paragraph>

          <Tabs
            section={{
              title: "Padding",
              html:
                '<div class="drac-box">\n  <div class="drac-box drac-bg-pink drac-p-sm">\n    <div class="drac-box">\n      <span class="drac-text drac-line-height drac-text-black">padding sm</span>\n    </div>\n  </div>\n  <div class="drac-box drac-bg-purple drac-py-sm">\n    <div class="drac-box">\n      <span class="drac-text drac-line-height drac-text-black"\n        >padding y sm</span\n      >\n    </div>\n  </div>\n  <div class="drac-box drac-bg-red drac-px-sm">\n    <div class="drac-box">\n      <span class="drac-text drac-line-height drac-text-black"\n        >padding x sm</span\n      >\n    </div>\n  </div>\n  <div\n    class="drac-box drac-bg-purple-cyan drac-pt-sm drac-pb-md drac-pl-lg drac-pr-xxs"\n  >\n    <div class="drac-box">\n      <span class="drac-text drac-line-height drac-text-black"\n        >mixing all styles</span\n      >\n    </div>\n  </div>\n</div>\n',
              react:
                '<Box>\n  <Box p="sm" color="pink">\n    <Box>\n      <Text>padding sm</Text>\n    </Box>\n  </Box>\n  <Box py="sm" color="purple">\n    <Box>\n      <Text>padding y sm</Text>\n    </Box>\n  </Box>\n  <Box px="sm" color="red">\n    <Box>\n      <Text>padding x sm</Text>\n    </Box>\n  </Box>\n  <Box pt="sm" pb="md" pl="lg" pr="xxs" color="purpleCyan">\n    <Box>\n      <Text>mixing all styles</Text>\n    </Box>\n  </Box>\n</Box>;\n',
              docs: "",
              screenshot: "./dsp/assets/SpacingPadding.png"
            }}
          />
        </Box>

        <Box my="lg">
          <Heading as="h3" size="md">
            Margin
          </Heading>
          <Paragraph>
            Similar to the padding helpers, the margin css utility classes and{" "}
            <Box as="code" className="drac-text-pink">
              m
            </Box>{" "}
            React property can help manage margin for your components and html
            elements.
          </Paragraph>

          <Tabs
            section={{
              title: "Margin",
              html:
                '<div class="drac-box">\n  <div class="drac-box drac-bg-pink drac-m-sm">\n    <div class="drac-box">\n      <span class="drac-text drac-line-height drac-text-black">margin sm</span>\n    </div>\n  </div>\n  <div class="drac-box drac-bg-purple drac-my-sm">\n    <div class="drac-box">\n      <span class="drac-text drac-line-height drac-text-black"\n        >margin y sm</span\n      >\n    </div>\n  </div>\n  <div class="drac-box drac-bg-red drac-mx-sm">\n    <div class="drac-box">\n      <span class="drac-text drac-line-height drac-text-black"\n        >margin x sm</span\n      >\n    </div>\n  </div>\n  <div\n    class="drac-box drac-bg-purple-cyan drac-mt-sm drac-mb-md drac-ml-lg drac-mr-xxs"\n  >\n    <div class="drac-box">\n      <span class="drac-text drac-line-height drac-text-black"\n        >mixing all styles</span\n      >\n    </div>\n  </div>\n</div>\n',
              react:
                '<Box>\n  <Box m="sm" color="pink">\n    <Box>\n      <Text>margin sm</Text>\n    </Box>\n  </Box>\n  <Box my="sm" color="purple">\n    <Box>\n      <Text>margin y sm</Text>\n    </Box>\n  </Box>\n  <Box mx="sm" color="red">\n    <Box>\n      <Text>margin x sm</Text>\n    </Box>\n  </Box>\n  <Box mt="sm" mb="md" ml="lg" mr="xxs" color="purpleCyan">\n    <Box>\n      <Text>mixing all styles</Text>\n    </Box>\n  </Box>\n</Box>;\n',
              docs: "",
              screenshot: "./dsp/assets/SpacingMargin.png"
            }}
          />
        </Box>

        <Box my="lg">
          <Heading as="h2" size="xl" color="cyanGreen">
            Utility Classes and Properties
          </Heading>
          <Paragraph className={styles.description}>
            Here's a full list of all CSS classes and React properties.
          </Paragraph>

          <Box style={{ maxHeight: 800, overflow: "auto" }}>
            <Table variant="striped">
              <thead>
                <tr>
                  <th>
                    <Text color="white">Padding</Text>
                  </th>
                  <th>
                    <Text color="white">Margin</Text>
                  </th>
                </tr>
              </thead>
              <tbody>
                {spacingUtilities.classes.padding.map((_, index) => {
                  return (
                    <tr key={_}>
                      <td>
                        <Text color="white">
                          .{spacingUtilities.classes.padding[index]}
                        </Text>
                      </td>
                      <td>
                        <Text color="white">
                          .{spacingUtilities.classes.margin[index]}
                        </Text>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Box>
        </Box>

        <Heading as="h2" size="xl" color="cyanGreen">
          Styling with regular CSS
        </Heading>

        <Paragraph className={styles.description}>
          Regular styling with CSS, inline styles, and custom classes are still,
          for the cases where the Dracula UI spacing system can't cater to your
          needs.
        </Paragraph>

        <Paragraph className={styles.description}>
          Feel free to mix and match whatever styling strategy makes sense for
          your project.
        </Paragraph>
      </Box>
    )
  }
}

Spacing.Layout = Docs

export default Spacing
