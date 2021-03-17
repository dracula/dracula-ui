import { Box } from '@/components/Box/Box'
import React from 'react'
import { snapshot } from '../../../documentation/render-component'
import { docs } from '../../../documentation/site-docs'
import { Text } from '../../Text/Text'

docs(Box, {
  basic: () =>
    snapshot(
      'Usage',
      () => (
        <Box>
          <Text>Dracula</Text>
        </Box>
      ),
      'A Box is analogous to an HTML div and can contain any other component. Use Box when you want to compose layouts, or multiple components.'
    ),
  variations: () => [
    snapshot(
      'Colors',
      () => (
        <Box color="pinkPurple">
          <Text>Pink Purple</Text>
        </Box>
      ),
      'Boxes can be customized to use any of the Dracula UI theme colors, including all solid, gradient, and animated colors.'
    ),

    snapshot(
      'Rounded',
      () => (
        <div>
          <Box rounded="lg" color="purpleCyan" p="md">
            <Text>Large round border</Text>
          </Box>

          <Box rounded="sm" color="yellowPink" p="md">
            <Text color="black">small round border</Text>
          </Box>
        </div>
      ),
      'Choose from one of the predefined `rounded` options for a Box.'
    ),

    snapshot(
      'Spacing',
      () => (
        <div>
          <Box color="yellowPink" p="xs">
            <Text color="black">xs padding</Text>
          </Box>

          <Box color="purpleCyan" p="sm">
            <Text color="black">sm padding</Text>
          </Box>

          <Box color="pinkPurple" p="md">
            <Text color="black">medium padding</Text>
          </Box>

          <Box color="yellowPink" m="xs">
            <Text color="black">xs margin</Text>
          </Box>

          <Box color="purpleCyan" m="sm">
            <Text color="black">sm margin</Text>
          </Box>

          <Box color="pinkPurple" m="md">
            <Text color="black">medium margin</Text>
          </Box>
        </div>
      ),
      'Boxes come with pre defined spacing primitives for padding and margin that allow for customizing the spacing inside and around boxes.'
    )
  ]
})
