import { omit } from "lodash"
import Head from "next/head"
import React from "react"
import {
  colorUtilities,
  baseColors,
  borderColors,
  Box,
  gradientColors,
  Heading,
  Paragraph,
  Table,
  Text,
  textColors
} from "../../dist"
import Navigation from "../components/Navigation"
import Theme from "../layouts/Theme"
import styles from "./index.module.css"

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: "Colors",
        description: "Learn how to use the Dracula UI color system."
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
                    Color System
                  </Heading>
                  <Paragraph>
                    Dracula UI ships with a hand crafted color system thats help
                    you design apps and websites that are pleasing and easy on
                    the eyes.
                  </Paragraph>

                  <Paragraph>
                    The color system includes a variety of CSS classes,
                    utilities, and properties that can be used to manage the
                    main accent color, as well as override the colors of
                    specific components and text.
                  </Paragraph>
                </Box>

                <Box my="lg">
                  <Heading size="heading-3">Base / Accent Colors</Heading>
                  <Paragraph>
                    Base colors are the elemental colors derived from the
                    Dracula color palette. The entire palette was tested against
                    the WCAG 2.0 level AA spec, which requires a contrast ratio
                    of at least 4.5:1 for normal text, therefore affording the
                    best readability.
                  </Paragraph>
                  <ul style={{ padding: 0, marginTop: 30 }}>
                    {Object.keys(baseColors).map((color) => {
                      return (
                        <Box
                          as="li"
                          mb="lg"
                          key={color}
                          style={{ listStyle: "none" }}
                        >
                          <Box my="sm">
                            <Text color={color}>.{textColors[color]}</Text>

                            <Box color={color} p="md" my="sm" rounded="base">
                              <Text color="blackLight">
                                .{baseColors[color]}
                              </Text>
                            </Box>

                            <Box
                              p="md"
                              my="sm"
                              borderColor={color}
                              rounded="base"
                              style={{
                                borderStyle: "solid",
                                borderWidth: "1px"
                              }}
                            >
                              <Text color={color}>.{borderColors[color]}</Text>
                            </Box>
                          </Box>
                        </Box>
                      )
                    })}
                  </ul>
                </Box>

                <Box my="lg">
                  <Heading size="heading-3">Gradients</Heading>
                  <Paragraph>
                    Gradients can be used to add a more playful tone to your
                    application, and can be very aesthetically pleasing when
                    used in moderation.
                  </Paragraph>

                  <ul style={{ padding: 0, marginTop: 30 }}>
                    {Object.keys(omit(gradientColors, "animated")).map(
                      (color) => {
                        return (
                          <Box
                            as="li"
                            mb="lg"
                            rounded="base"
                            key={color}
                            style={{ listStyle: "none" }}
                          >
                            <Box my="xs">
                              <Text color={color}>.{textColors[color]}</Text>
                              <Box color={color} p="md" my="xxs" rounded="base">
                                <Text color="blackLight">
                                  .{gradientColors[color]}
                                </Text>
                              </Box>
                            </Box>
                          </Box>
                        )
                      }
                    )}
                  </ul>
                </Box>

                <Box my="lg">
                  <Heading size="heading-3">
                    Color Animations (Experimental)
                  </Heading>

                  <Paragraph>
                    The animated color takes gradients one step further by
                    alternating gradient colors at a random time interval.
                  </Paragraph>

                  <Box my="xs">
                    <Box color="animated" p="lg" my="xxs" rounded="base">
                      <Text color="blackLight">
                        .{gradientColors["animated"]}
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box my="lg">
                  <Heading size="heading-3">
                    Conveying Hiearchy with Colors
                  </Heading>

                  <Paragraph>
                    Conveying hierarchy is one of the most challenging problems
                    when designing for Dark Mode. Dracula UI helps solve for it
                    by providing transparent and secondary colors.
                  </Paragraph>

                  <Box my="sm" color="blackSecondary" rounded="base">
                    <Box color="blackSecondary" p="lg" my="xxs" rounded="base">
                      <Text color="blackLight">.drac-black-secondary</Text>
                    </Box>
                  </Box>

                  <Box my="sm">
                    <Box
                      p="lg"
                      my="xxs"
                      rounded="base"
                      className="drac-bg-green-secondary"
                    >
                      <Text color="blackLight">.drac-bg-green-secondary</Text>
                    </Box>
                  </Box>

                  <Box my="sm">
                    <Box
                      p="lg"
                      my="xxs"
                      rounded="base"
                      className="drac-bg-pink-secondary"
                    >
                      <Text color="blackLight">.drac-bg-pink-secondary</Text>
                    </Box>
                  </Box>

                  <Box my="sm">
                    <Box
                      p="lg"
                      my="xxs"
                      rounded="base"
                      className="drac-bg-green-transparent"
                    >
                      <Text color="white">.drac-bg-green-transparent</Text>
                    </Box>
                  </Box>
                </Box>

                <Box my="lg">
                  <Heading size="heading-2" color="cyanGreen">
                    Utility Classes and Properties
                  </Heading>
                  <Paragraph className={styles.description}>
                    Here's a full list of all CSS classes and React properties.
                  </Paragraph>

                  <Box
                    style={{
                      maxHeight: 800,
                      overflowY: "auto",
                      overflowX: "none"
                    }}
                  >
                    <Table variant="striped">
                      <thead>
                        <tr>
                          <th>
                            <Text color="white">Color</Text>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {colorUtilities.classes.map((color) => {
                          return (
                            <tr key={_}>
                              <td>
                                <Text color="white">.{color}</Text>
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
                still available for the cases where the Dracula UI color system
                can't cater to your needs.
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
