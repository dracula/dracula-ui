import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { Input } from '@/components/Input/Input'

docs(Input, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      'Styles or abstracts HTML input elements.'
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        Colors,
        'Inputs can be customized to use any of the Dracula UI theme colors.'
      ),
      snapshot(
        'Sizes',
        Sizes,
        'Inputs can be customize to use several different sizes.'
      ),
      snapshot(
        'Variants',
        Variants,
        'Use the `outline` variant to represent subtler text Inputs'
      )
    ]
  }
})

function Usage() {
  return (
    <Input placeholder="Input" color="white" />
  )
}

function Colors() {
  return (
    <Box>
      <Input color="purple" placeholder="purple" m="xs" />
      <Input color="green" placeholder="green" m="xs" />
    </Box>
  )
}

function Sizes() {
  return (
    <Box>
      <Input size="small" placeholder="small" m="xs" />
      <Input size="medium" placeholder="medium" m="xs" />
      <Input size="large" placeholder="large" m="xs" />
    </Box>
  )
}

function Variants() {
  return (
    <Box>
      <Input variant="normal" placeholder="normal" m="xs" />
      <Input variant="outline" placeholder="outline" m="xs" />
    </Box>
  )
}