import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Text } from '@/components/Text/Text'
import { Box } from '@/components/Box/Box'
import { Paragraph } from '../../Paragraph/Paragraph'

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

    snapshot('Display', Display, 'Control the display type of an element.'),

    snapshot(
      'Rounded',
      Rounded,
      'Choose from one of the predefined `rounded` options for a Box.'
    ),

    snapshot(
      'Height',
      Height,
      'Set an element with a fixed height, including `auto` and `full`.'
    ),

    snapshot(
      'Width',
      Width,
      'Set an element with a fixed width, including `auto` and `full`.'
    ),

    snapshot(
      'Spacing',
      Spacing,
      'Boxes come with pre defined spacing primitives for padding and margin that allow for customizing the spacing inside and around boxes.'
    ),

    snapshot(
      'Scrollbar',
      Scrollbar,
      'You can customize the color of scrollbars for boxes with any of the existing Dracula UI base colors.'
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
      <Text color="black">Pink Purple</Text>
    </Box>
  )
}

function Rounded() {
  return (
    <Box>
      <Box rounded="lg" color="purpleCyan" p="md">
        <Text color="black">Large round border</Text>
      </Box>

      <Box rounded="sm" color="yellowPink" p="md">
        <Text color="black">small round border</Text>
      </Box>
    </Box>
  )
}

function Display() {
  return (
    <Box>
      <Box
        color="purpleCyan"
        display="inline-block"
        rounded="lg"
        p="xs"
        mr="xs"
      >
        <Text color="black">1</Text>
      </Box>
      <Box
        color="purpleCyan"
        display="inline-block"
        rounded="lg"
        p="xs"
        mr="xs"
      >
        <Text color="black">2</Text>
      </Box>
      <Box
        color="purpleCyan"
        display="inline-block"
        rounded="lg"
        p="xs"
        mr="xs"
      >
        <Text color="black">3</Text>
      </Box>
    </Box>
  )
}

function Height() {
  return (
    <Box style={{ display: 'flex', alignItems: 'flex-end' }}>
      <Box color="cyanGreen" height="xxs" rounded="lg" p="xs" mr="xs">
        <Text color="black">xxs</Text>
      </Box>
      <Box color="cyanGreen" height="xs" rounded="lg" p="xs" mr="xs">
        <Text color="black">xs</Text>
      </Box>
      <Box color="cyanGreen" height="sm" rounded="lg" p="xs" mr="xs">
        <Text color="black">sm</Text>
      </Box>
      <Box color="cyanGreen" height="md" rounded="lg" p="xs" mr="xs">
        <Text color="black">md</Text>
      </Box>
    </Box>
  )
}

function Width() {
  return (
    <Box>
      <Box color="yellowPink" width="xs" rounded="lg" p="xs" mb="xs">
        <Text color="black">xs</Text>
      </Box>
      <Box color="yellowPink" width="md" rounded="lg" p="xs" mb="xs">
        <Text color="black">md</Text>
      </Box>
      <Box color="yellowPink" width="xl" rounded="lg" p="xs" mb="xs">
        <Text color="black">xl</Text>
      </Box>
      <Box color="yellowPink" width="full" rounded="lg" p="xs" mb="xs">
        <Text color="black">full</Text>
      </Box>
    </Box>
  )
}

function Spacing() {
  return (
    <Box>
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
    </Box>
  )
}

function Scrollbar() {
  return (
    <div>
      <Box scrollbar height="sm">
        <Text color="white">Scrollbar</Text>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
          dictum imperdiet. Praesent at interdum sem. Suspendisse congue, nibh
          sit amet facilisis egestas, leo leo tempus ligula, sit amet tristique
          lacus diam non massa. Quisque egestas magna ligula, vel aliquet quam
          auctor sed. Maecenas quam dui, tincidunt in rutrum vel, porttitor non
          nulla. Praesent eu congue magna, nec pellentesque justo. Nulla
          viverra, eros a vulputate sollicitudin, erat erat lacinia risus, sed
          eleifend nibh neque eu turpis. Maecenas vitae nulla finibus, faucibus
          diam et, posuere est. In non leo et est ornare laoreet ac vel odio.
          Vestibulum tempor, quam eleifend suscipit tempus, nisl nibh eleifend
          nunc, vitae sollicitudin mi purus sed nisl. Vivamus dapibus dui ac
          viverra aliquam. Vestibulum non luctus risus.
        </Paragraph>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
          dictum imperdiet. Praesent at interdum sem. Suspendisse congue, nibh
          sit amet facilisis egestas, leo leo tempus ligula, sit amet tristique
          lacus diam non massa. Quisque egestas magna ligula, vel aliquet quam
          auctor sed. Maecenas quam dui, tincidunt in rutrum vel, porttitor non
          nulla. Praesent eu congue magna, nec pellentesque justo. Nulla
          viverra, eros a vulputate sollicitudin, erat erat lacinia risus, sed
          eleifend nibh neque eu turpis. Maecenas vitae nulla finibus, faucibus
          diam et, posuere est. In non leo et est ornare laoreet ac vel odio.
          Vestibulum tempor, quam eleifend suscipit tempus, nisl nibh eleifend
          nunc, vitae sollicitudin mi purus sed nisl. Vivamus dapibus dui ac
          viverra aliquam. Vestibulum non luctus risus.
        </Paragraph>
      </Box>

      <Box scrollbar="pink" p="xs" height="xs">
        <Text color="white">Scrollbar</Text>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
          dictum imperdiet. Praesent at interdum sem. Suspendisse congue, nibh
          sit amet facilisis egestas, leo leo tempus ligula, sit amet tristique
          lacus diam non massa. Quisque egestas magna ligula, vel aliquet quam
          auctor sed. Maecenas quam dui, tincidunt in rutrum vel, porttitor non
          nulla. Praesent eu congue magna, nec pellentesque justo. Nulla
          viverra, eros a vulputate sollicitudin, erat erat lacinia risus, sed
          eleifend nibh neque eu turpis. Maecenas vitae nulla finibus, faucibus
          diam et, posuere est. In non leo et est ornare laoreet ac vel odio.
          Vestibulum tempor, quam eleifend suscipit tempus, nisl nibh eleifend
          nunc, vitae sollicitudin mi purus sed nisl. Vivamus dapibus dui ac
          viverra aliquam. Vestibulum non luctus risus.
        </Paragraph>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
          dictum imperdiet. Praesent at interdum sem. Suspendisse congue, nibh
          sit amet facilisis egestas, leo leo tempus ligula, sit amet tristique
          lacus diam non massa. Quisque egestas magna ligula, vel aliquet quam
          auctor sed. Maecenas quam dui, tincidunt in rutrum vel, porttitor non
          nulla. Praesent eu congue magna, nec pellentesque justo. Nulla
          viverra, eros a vulputate sollicitudin, erat erat lacinia risus, sed
          eleifend nibh neque eu turpis. Maecenas vitae nulla finibus, faucibus
          diam et, posuere est. In non leo et est ornare laoreet ac vel odio.
          Vestibulum tempor, quam eleifend suscipit tempus, nisl nibh eleifend
          nunc, vitae sollicitudin mi purus sed nisl. Vivamus dapibus dui ac
          viverra aliquam. Vestibulum non luctus risus.
        </Paragraph>
      </Box>
    </div>
  )
}
