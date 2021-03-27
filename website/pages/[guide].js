import { Box, Button, Card, Heading, Anchor, Paragraph, Text } from "../../dist"
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
      <Anchor id="properties" href="#properties" color="black">
        <Heading size="heading-2">Properties</Heading>
      </Anchor>

      <PropsTable props={docGenProps} />
    </>
  )
}

function DocsOverview({ sections }) {
  return (
    <Box as="ul" style={{ position: "fixed", right: 80 }}>
      <Text weight="semibold" style={{ textTransform: "uppercase" }}>
        On this page
      </Text>
      <Box color="pinkPurple" style={{ height: 2 }} my="xs" />

      {sections.map((section) => {
        return (
          <Box key={section.title} py="xxs">
            <Anchor
              size="small"
              color="blackSecondary"
              href={`#${section.title.toLowerCase()}`}
              hoverColor="pinkPurple"
            >
              {section.title}
            </Anchor>
          </Box>
        )
      })}

      <Box key="properties">
        <Anchor
          size="small"
          href="#properties"
          hoverColor="pinkPurple"
          color="blackSecondary"
        >
          Properties
        </Anchor>
      </Box>
    </Box>
  )
}

function Section({ section }) {
  return (
    <Box>
      <Anchor
        id={section.title.toLowerCase()}
        href={`#${section.title.toLowerCase()}`}
      >
        <Heading size="heading-2" my="small">
          {section.title}
        </Heading>
      </Anchor>

      {section.description && (
        <Paragraph size="md">{section.description}</Paragraph>
      )}

      <Tabs section={section} />
    </Box>
  )
}

function Guide({ query }) {
  const { title, description, sections, docgen } = query

  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="Netto Farah &amp; Zeno Rocha" name="author" />
      </Head>

      <Box className={styles.container} style={{ minHeight: "100vh" }}>
        <Navigation selected={title} />

        <Box className={styles.content} py="lg">
          <main className={styles.center}>
            <DocsOverview sections={sections} />

            <Box>
              <Heading size="heading-1">{title}</Heading>
              <Paragraph className={styles.description} size="md">
                {description}
              </Paragraph>

              {sections.map((section) => {
                return (
                  <Box key={section.title} my="lg">
                    <Section key={section.title + title} section={section} />
                  </Box>
                )
              })}

              <Box mt="lg">
                <Properties docGenProps={docgen.props} />
              </Box>
            </Box>
          </main>
        </Box>
      </Box>
    </Box>
  )
}

Guide.Layout = Theme

export default Guide
