import React from 'react'
import { Text } from '@/components/Text/Text'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'
import { Box } from '../../Box/Box'

docs(Text, {
  basic() {
    return snapshot(
      'Usage',
      () => <Text>basic</Text>,
      'Show inline text within an interface.'
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        () => (
          <Box>
            <Box>
              <Text color="cyan">cyan</Text>
            </Box>
            <Box>
              <Text color="green">green</Text>
            </Box>
          </Box>
        ),
        'Text can be customized to use any of the Dracula UI theme colors.'
      ),
      snapshot(
        'Weights',
        () => (
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
        ),
        'Text can be defined in different font weights.'
      ),
      snapshot(
        'Sizes',
        () => (
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
        ),
        'Text can be customize to use several different sizes.'
      )
    ]
  }
})
