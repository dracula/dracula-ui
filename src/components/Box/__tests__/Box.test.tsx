import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Text } from '@/components/Text/Text'
import { Box } from '@/components/Box/Box'

docs(Box, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      'A Box is analogous to an HTML div and can contain any other component. Use Box when you want to compose layouts, or multiple components.'
    )
  },
  variations: () => [
    snapshot(
      'Colors',
      Colors,
      'Boxes can be customized to use any of the Dracula UI theme colors, including all solid, gradient, and animated colors.'
    ),

    snapshot(
      'Rounded',
      Rounded,
      'Choose from one of the predefined `rounded` options for a Box.'
    ),

    snapshot(
      'Spacing',
      Spacing,
      'Boxes come with pre defined spacing primitives for padding and margin that allow for customizing the spacing inside and around boxes.'
    )
  ]
})

function Usage() {
  return (
    <Box>
      <Text>Dracula</Text>
    </Box>
  )
}

function Colors() {
  return (
    <Box color="pinkPurple">
      <Text>Pink Purple</Text>
    </Box>
  )
}

function Rounded() {
  return (
    <div>
      <Box rounded="lg" color="purpleCyan" p="md">
        <Text>Large round border</Text>
      </Box>

      <Box rounded="sm" color="yellowPink" p="md">
        <Text color="black">small round border</Text>
      </Box>
    </div>
  )
}

function Spacing() {
  return (
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
  )
}