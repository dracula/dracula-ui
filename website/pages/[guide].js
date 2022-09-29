import React from 'react'
import { Anchor, Box, Heading, Paragraph } from 'dracula-ui'
import { DocsOverview } from '../components/DocsOverview'
import PropsTable from '../components/PropsTable'
import Tabs from '../components/Tabs'
import Docs from '../layouts/Docs'
import paths from '../lib/paths'

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
        <Heading as="h2" size="xl">
          Properties
        </Heading>
      </Anchor>

      <PropsTable props={docGenProps} />
    </>
  )
}

function Section({ section }) {
  return (
    <Box>
      <Anchor
        id={section.title.toLowerCase()}
        href={`#${section.title.toLowerCase()}`}
      >
        <Heading as="h2" size="xl" my="sm">
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
  const { title, sections, docgen } = query

  return (
    <Box>
      <DocsOverview sections={sections} showProperties />

      <Box>
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
    </Box>
  )
}

Guide.Layout = Docs

export default Guide
