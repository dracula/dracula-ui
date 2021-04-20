import React from 'react'
import { Anchor, Box, Text } from '@dracula/dracula-ui'

export function DocsOverview({ sections, showProperties }) {
  return (
    <Box
      as="ul"
      style={{
        position: 'fixed',
        right: '80px',
        top: '64px',
        margin: 0,
        maxHeight: '80vh',
        overflowY: 'auto'
      }}
    >
      <Text weight="semibold" style={{ textTransform: 'uppercase' }}>
        On this page
      </Text>
      <Box color="pinkPurple" style={{ height: 2 }} my="xs" />

      {sections.map((section) => {
        return (
          <Box key={section.title} py="xxs">
            <Anchor
              size="sm"
              color="blackSecondary"
              href={`#${section.title.toLowerCase()}`}
              hoverColor="pinkPurple"
            >
              {section.title}
            </Anchor>
          </Box>
        )
      })}

      {showProperties && (
        <Box key="properties">
          <Anchor
            size="sm"
            href="#properties"
            hoverColor="pinkPurple"
            color="blackSecondary"
          >
            Properties
          </Anchor>
        </Box>
      )}
    </Box>
  )
}
