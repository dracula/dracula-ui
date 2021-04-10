import { docs } from '@/documentation/site-docs'
import React from 'react'
import { snapshot } from '../../../documentation/render-component'
import { Box } from '../../Box/Box'
import { Button } from '../Button'

docs(Button, {
  basic: () =>
    snapshot(
      'Usage',
      () => <Button color="purple">Dracula</Button>,
      'A Dracula UI button behaves like regular HTML buttons and accepts the same contents and properties.'
    ),
  variations: () => [
    snapshot(
      'Colors',
      () => (
        <div>
          <Button color="purple" m="sm">
            Purple
          </Button>
          <Button color="purpleCyan" m="sm">
            Purple Cyan
          </Button>
        </div>
      ),
      'Buttons can be customized to use any of the Dracula UI theme colors, including all solid, gradient, and animated colors.'
    ),
    snapshot(
      'Variants',
      () => (
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
      ),
      'Dracula UI ships with three distinct button variations that allow for different levels of hierarchy and usage.'
    ),
    snapshot(
      'Disabled',
      () => (
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
      ),
      `A disabled button can't used, clicked, or even submitted with a form.`
    ),
    snapshot(
      'Sizes',
      () => (
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
      ),
      'Button sizes range from `xs` to `lg` using the Dracula UI size scale.'
    ),
    snapshot(
      'Tags',
      () => (
        <Box>
          <Button as="button" m="sm">
            Button
          </Button>
          <Button as="a" href="#" m="sm">
            Anchor
          </Button>
        </Box>
      ),
      'By default, every Button is specified with the `<button>` tag, but you can change that to better match your semantic needs.'
    )
  ]
})
