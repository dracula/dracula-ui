import Head from "next/head"
import React from "react"
import {
  Box,
  Heading,
  Paragraph,
  spacingUtilities,
  Table,
  Text
} from "@dracula/dracula-ui"
import SpacingDocs from "../../dsp/data/components/Spacing.json"
import Navigation from "../components/Navigation"
import Tabs from "../components/Tabs"
import Theme from "../layouts/Theme"
import styles from "./index.module.css"

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
    const { title, description } = this.props.query

    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
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
                  <Heading size="heading-2" color="cyanGreen">
                    Spacing Utilities
                  </Heading>
                  <Paragraph>
                    Dracula UI ships with two spacing utilities that help you
                    define padding and margin for your websites and apps. While
                    not required, the utility css classes and the{" "}
                    <Box as="code" className="drac-text-pink">
                      p
                    </Box>{" "}
                    and{" "}
                    <Box as="code" className="drac-text-pink">
                      m
                    </Box>{" "}
                    properties (for React components), help remove the burden of
                    having to manage your own spacing classes, properties and
                    variables.
                  </Paragraph>
                </Box>

                <Box my="lg">
                  <Heading size="heading-3">Padding</Heading>
                  <Paragraph>
                    The padding css utility classes and{" "}
                    <Box as="code" className="drac-text-pink">
                      p
                    </Box>{" "}
                    React property can help manage padding for your components
                    and html elements.
                  </Paragraph>

                  <Tabs section={SpacingDocs.ext_com_draculaui_variations[0]} />

                  <Paragraph pt="md">
                    Add the{" "}
                    <Box as="code" className="drac-text-pink">
                      p
                    </Box>{" "}
                    property at the top level of any Dracula UI react component
                    for easy and type safe padding management. For HTML only
                    websites, apply the{" "}
                    <Box as="code" className="drac-text-pink">
                      .drac-p
                    </Box>{" "}
                    css utilty classes directly into your code.
                  </Paragraph>

                  <Tabs section={SpacingDocs.ext_com_draculaui_variations[1]} />
                </Box>

                <Box my="lg">
                  <Heading size="heading-3">Margin</Heading>
                  <Paragraph>
                    Similar to the padding helpers, the margin css utility
                    classes and{" "}
                    <Box as="code" className="drac-text-pink">
                      m
                    </Box>{" "}
                    React property can help manage margin for your components
                    and html elements.
                  </Paragraph>

                  <Tabs section={SpacingDocs.ext_com_draculaui_variations[2]} />
                </Box>

                <Box my="lg">
                  <Heading size="heading-2" color="cyanGreen">
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
              </Box>

              <Heading size="heading-2" color="cyanGreen">
                Styling with regular CSS
              </Heading>

              <Paragraph className={styles.description}>
                Regular styling with CSS, inline styles, and custom classes are
                still, for the cases where the Dracula UI spacing system can't
                cater to your needs.
              </Paragraph>

              <Paragraph className={styles.description}>
                Feel free to mix and match whatever styling strategy makes sense
                for your project.
              </Paragraph>
            </main>
          </Box>
        </Box>
      </div>
    )
  }
}

Spacing.Layout = Theme

export default Spacing
