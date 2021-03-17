import React from 'react'
import { Input } from '@/components/Input/Input'
import {
  InputColors,
  InputSizes,
  InputVariants
} from '@/components/Input/__stories__/Input.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'
import { Box } from '../../Box/Box'

docs(Input, {
  basic() {
    return snapshot(
      'Usage',
      () => <Input placeholder="Input" color="white" />,
      'Styles or abstracts HTML input elements.'
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        () => (
          <Box>
            <Input color="purple" placeholder="purple" m="xs" />
            <Input color="green" placeholder="green" m="xs" />
          </Box>
        ),
        'Inputs can be customized to use any of the Dracula UI theme colors.'
      ),
      snapshot(
        'Sizes',
        () => (
          <Box>
            <Input size="small" placeholder="small" m="xs" />
            <Input size="medium" placeholder="medium" m="xs" />
            <Input size="large" placeholder="large" m="xs" />
          </Box>
        ),
        'Inputs can be customize to use several different sizes.'
      ),
      snapshot(
        'Variants',
        () => (
          <Box>
            <Input variant="normal" placeholder="normal" m="xs" />
            <Input variant="outline" placeholder="outline" m="xs" />
          </Box>
        ),
        'Use the `outline` variant to represent subtler text Inputs'
      )
    ]
  }
})
