import { Box } from '@/components/Box/Box'
import { BoxRounded } from '@/components/Box/__stories__/Box.stories'
import React from 'react'
import { snapshot } from '../../../documentation/render-component'
import { docs } from '../../../documentation/site-docs'

docs(Box, {
  basic: () => snapshot('Usage', () => <Box color="purple">Dracula</Box>),
  variations: () => [
    snapshot('Colors', () => <Box color="pinkPurple">Pink Purple</Box>),
    snapshot('Rounded', BoxRounded),
    snapshot('Generic Elements', () => (
      <div>
        <Box as="button" color="pinkPurple">
          Button
        </Box>

        <Box as="a" color="green" href="#">
          Link
        </Box>
      </div>
    ))
  ]
})
