import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { Button } from '@/components/Button/Button'

docs('Button', {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      'A Dracula UI button behaves like regular HTML buttons and accepts the same contents and properties.'
    )
  },
  variations: () => [
    snapshot(
      'Colors',
      Colors,
      'Buttons can be customized to use any of the Dracula UI theme colors, including all solid, gradient, and animated colors.'
    ),
    snapshot(
      'Variants',
      Variants,
      'Dracula UI ships with three distinct button variations that allow for different levels of hierarchy and usage.'
    ),
    snapshot(
      'Disabled',
      Disabled,
      `A disabled button can't used, clicked, or even submitted with a form.`
    ),
    snapshot(
      'Sizes',
      Sizes,
      'Button sizes range from `xs` to `lg` using the Dracula UI size scale.'
    ),
    snapshot(
      'Tags',
      Tags,
      'By default, every Button is specified with the `<button>` tag, but you can change that to better match your semantic needs.'
    )
  ]
})

function Usage() {
  return <Button color="purple">Dracula</Button>
}

function Colors() {
  return (
    <div>
      <Button color="purple" m="sm">
        Purple
      </Button>
      <Button color="purpleCyan" m="sm">
        Purple Cyan
      </Button>
    </div>
  )
}

function Variants() {
  return (
    <Box>
      <Button color="purple" m="sm">
        Normal
      </Button>
      <Button variant="ghost" color="purple" m="sm">
        Ghost
      </Button>
      <Button variant="outline" color="purple" m="sm">
        Outline
      </Button>
    </Box>
  )
}

function Disabled() {
  return (
    <Box>
      <Button disabled color="purple" m="sm">
        Normal
      </Button>
      <Button disabled variant="ghost" color="purple" m="sm">
        Ghost
      </Button>
      <Button disabled variant="outline" color="purple" m="sm">
        Outline
      </Button>
    </Box>
  )
}

function Sizes() {
  return (
    <Box>
      <Button color="purple" size="xs" m="sm">
        xs
      </Button>
      <Button color="purple" size="sm" m="sm">
        sm
      </Button>
      <Button color="purple" size="md" m="sm">
        md
      </Button>
      <Button color="purple" size="lg" m="sm">
        lg
      </Button>
    </Box>
  )
}

function Tags() {
  return (
    <Box>
      <Box>
        <Button as="button" m="sm">
          Button
        </Button>
      </Box>

      <Box>
        <Button as="input" m="sm" type="submit" value="Submit" />
      </Box>

      <Box>
        <Button as="a" href="#" m="sm">
          Anchor
        </Button>
      </Box>
    </Box>
  )
}
