import { Box, Button, Card, Heading, Link, Paragraph, Text } from "../../dist"
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

function Properties({ docGenProps }) {
  return (
    <>
      <Link id="properties" href="#properties" color="black">
        <Heading size="heading-2">Properties</Heading>
      </Link>
      <Box color="purpleCyan" style={{ height: 2, marginTop: "0.5rem" }}></Box>

      <PropsTable props={docGenProps} />
    </>
  )
}

function DocsOverview({ sections }) {
  return (
    <Box as="ul" style={{ position: "fixed", right: 80 }} p="md">
      <Text weight="semibold" style={{ textTransform: "uppercase" }}>
        On this page
      </Text>
      <Box color="pinkPurple" style={{ height: 2 }} my="xs" />

      <Box key="properties" my="xxs">
        <Link
          size="small"
          href="#properties"
          hoverColor="pinkPurple"
          color="blackSecondary"
        >
          Properties
        </Link>
      </Box>

      {sections.map((section) => {
        return (
          <Box key={section.title} py="xxs">
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
    </Box>
  )
}

function Section({ section, selectedTab, onChangeSelectedTab }) {
  return (
    <Card p="md">
      <Link
        id={section.title.toLowerCase()}
        href={`#${section.title.toLowerCase()}`}
      >
        <Heading size="heading-2" my="small">
          {section.title}
        </Heading>
      </Link>

      <Box color="pinkPurple" style={{ height: 2 }} my="s" />

      {section.description && (
        <Paragraph size="small">{section.description}</Paragraph>
      )}

      <Box
        className={styles.usage}
        p="sm"
        mt="sm"
        dangerouslySetInnerHTML={{ __html: section.code }}
        style={{ overflow: "auto", maxHeight: 300 }}
      />

      <Box py="sm">
        <details>
          <summary style={{ outline: 'none' }}>
            <Text>code</Text>
          </summary>
          <Tabs
            selectedTab={selectedTab}
            onChangeSelectedTab={onChangeSelectedTab}
            section={section}
          />
        </details>
      </Box>
    </Card>
  )
}

class Guide extends React.Component {
  state = {
    selectedTab: 0
  }

  onChangeSelectedTab(index) {
    this.setState({ selectedTab: index })
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
          <Navigation selected={this.props.query.title} />

          <Box className={styles.content} py="md">
            <main className={styles.center}>
              <DocsOverview sections={this.props.query.sections} />

              <Box>
                <Heading color="purpleCyan" size="heading-1">
                  {this.props.query.title}
                </Heading>
                <Paragraph size="small">
                  {this.props.query.description}
                </Paragraph>

                <Card p="md" mt="lg">
                  <Properties docGenProps={this.props.query.docgen.props} />
                </Card>

                {this.props.query.sections.map((section) => {
                  return (
                    <Box key={section.title} my="lg">
                      <Section
                        key={section.title}
                        section={section}
                        onChangeSelectedTab={this.onChangeSelectedTab.bind(
                          this
                        )}
                        selectedTab={this.state.selectedTab}
                      />
                    </Box>
                  )
                })}
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
