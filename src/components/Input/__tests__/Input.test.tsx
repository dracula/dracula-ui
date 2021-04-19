import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { Input } from '@/components/Input/Input'

docs(Input, {
  basic() {
    return snapshot('Usage', Usage, 'Styles or abstracts HTML input elements.')
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
      ),
      snapshot(
        'Type',
        Types,
        'Use the `type` property to define what kind of HTML input you would like to use'
      )
    ]
  }
})

function Usage() {
  return <Input placeholder="Input" color="white" />
}

function Types() {
  return (
    <Box>
      <Input my="sm" color="white" placeholder="Password" type="password" />
      <Input my="sm" color="white" placeholder="Date" type="date" />
      <Input my="sm" color="white" placeholder="Email" type="email" />
      <Input my="sm" color="white" placeholder="Number" type="number" />
      <Input my="sm" color="white" placeholder="Range" type="range" />
      <Input my="sm" color="white" placeholder="Telephone" type="tel" />
    </Box>
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
      <Input color="white" size="small" placeholder="small" m="xs" />
      <Input color="white" size="medium" placeholder="medium" m="xs" />
      <Input color="white" size="large" placeholder="large" m="xs" />
    </Box>
  )
}

function Variants() {
  return (
    <Box>
      <Input color="white" variant="normal" placeholder="normal" m="xs" />
      <Input color="white" variant="outline" placeholder="outline" m="xs" />
    </Box>
  )
}
