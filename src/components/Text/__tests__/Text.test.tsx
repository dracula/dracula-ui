import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { Text } from '@/components/Text/Text'

docs(Text, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      'Show inline text within an interface.'
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        Colors,
        'Text can be customized to use any of the Dracula UI theme colors.'
      ),
      snapshot(
        'Weights',
        Weights,
        'Text can be defined in different font weights.'
      ),
      snapshot(
        'Sizes',
        Sizes,
        'Text can be customize to use several different sizes.'
      )
    ]
  }
})

function Usage() {
  return (
    <Text>The quick vampire jumps over the lazy human</Text>
  )
}

function Colors() {
  return (
    <Box>
      <Box>
        <Text color="cyan">cyan</Text>
      </Box>
      <Box>
        <Text color="green">green</Text>
      </Box>
    </Box>
  )
}

function Weights() {
  return (
    <Box>
      <Box>
        <Text weight="normal">normal</Text>
      </Box>
      <Box>
        <Text weight="semibold">semibold</Text>
      </Box>
      <Box>
        <Text weight="bold">bold</Text>
      </Box>
    </Box>
  )
}

function Sizes() {
  return (
    <Box>
      <Box>
        <Text size="xs">xs</Text>
      </Box>
      <Box>
        <Text size="sm">sm</Text>
      </Box>
      <Box>
        <Text size="md">md</Text>
      </Box>
      <Box>
        <Text size="lg">lg</Text>
      </Box>
    </Box>
  )
}