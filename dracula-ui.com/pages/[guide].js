import { Box, Heading, Link, Paragraph, Text } from "../../dist"
import Head from "next/head"
import React from "react"
import Navigation from "../components/Navigation"
import PropsTable from "../components/PropsTable"
import Tabs from "../components/Tabs"
import Theme from "../layouts/Theme"
import paths from "../lib/paths"
import styles from "./index.module.css"

export async function getStaticPaths() {
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const query = paths.find((path) => path.params.guide === params.guide).params
  return { props: { query } }
}

class Guide extends React.Component {
  state = {
    selectedTab: 0
  }

  onChangeSelectedTab(index) {
    this.setState({ selectedTab: index })
  }

  renderSections() {
    return (this.props.query.sections ?? []).map((section) => {
      return (
        <>
          <Box key={section.title} spacing="mediumY">
            <Link
              id={section.title.toLowerCase()}
              href={`#${section.title.toLowerCase()}`}
            >
              <Heading size="heading-2" spacing="smallY">
                {section.title}
              </Heading>
            </Link>

            <Box color="pinkPurple" style={{ height: 2 }} />

            {section.description && (
              <Paragraph size="small">{section.description}</Paragraph>
            )}

            <Box
              className={styles.usage}
              spacing="small"
              dangerouslySetInnerHTML={{ __html: section.code }}
              style={{ overflow: "auto", maxHeight: 300 }}
            />

            <Tabs
              selectedTab={this.state.selectedTab}
              onChangeSelectedTab={this.onChangeSelectedTab.bind(this)}
              section={section}
            />
          </Box>
        </>
      )
    })
  }
  render() {
    const title = `${this.props.query.title} — Dracula UI`
    const description = "A dark-first collection of UI patterns and components"

    return (
      <Box>
        <Head>
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta
            content={`https://dracula-ui.com/${this.props.query.guide}`}
            property="og:url"
          />
        </Head>

        <Box className={styles.container} style={{ minHeight: "100vh" }}>
          <Navigation />

          <Box
            as="ul"
            style={{ position: "fixed", right: 80 }}
            spacing="medium"
          >
            <Text weight="semibold" style={{ textTransform: "uppercase" }}>
              On this page
            </Text>
            <Box color="pinkPurple" style={{ height: 2 }} margin="xsY" />

            {(this.props.query.sections ?? []).map((section) => {
              return (
                <Box key={section.title} spacing="xxsY">
                  <Link
                    size="small"
                    color="blackSecondary"
                    href={`#${section.title.toLowerCase()}`}
                    hoverColor="pinkPurple"
                  >
                    {section.title}
                  </Link>
                </Box>
              )
            })}

            <Box key="properties" spacing="xxsY">
              <Link
                size="small"
                href="#properties"
                hoverColor="pinkPurple"
                color="blackSecondary"
              >
                Properties
              </Link>
            </Box>
          </Box>

          <Box className={styles.content} spacing="mediumY">
            <main className={styles.center}>
              <Box>
                <Heading color="purpleCyan" size="heading-1">
                  {this.props.query.title}
                </Heading>
                <Paragraph size="small">{this.props.query.description}</Paragraph>

                {this.renderSections()}

                <Box spacing="mediumY">
                  <Link id="properties" href="#properties" color="black">
                    <Heading size="heading-2">Properties</Heading>
                  </Link>
                  <Box color="purpleCyan" style={{height: 2, marginTop: '0.5rem'}}></Box>

                  <Box className={styles.usage} spacing={["mediumX"]}>
                    <Box spacing="mediumY">
                      <PropsTable props={this.props.query.docgen.props} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </main>
          </Box>
        </Box>
      </Box>
    )
  }
}

Guide.Layout = Theme

export default Guide
