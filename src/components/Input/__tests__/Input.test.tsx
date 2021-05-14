import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { Input } from '@/components/Input/Input'
import { Heading } from '../../Heading/Heading'

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
        'Border Sizes',
        BorderSizes,
        'Border size can be customize to use several different sizes.'
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
      <Input color="white" size="sm" placeholder="small" m="xs" />
      <Input color="white" size="md" placeholder="medium" m="xs" />
      <Input color="white" size="lg" placeholder="large" m="xs" />
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

function BorderSizes() {
  return (
    <Box>
      <Box mb="sm">
        <Heading size="sm">sm</Heading>
        <Input
          color="green"
          variant="normal"
          borderSize="sm"
          placeholder="small border outline"
          m="xs"
        />
        <Input
          color="green"
          variant="outline"
          borderSize="sm"
          placeholder="small border outline"
          m="xs"
        />
      </Box>

      <Box mb="sm">
        <Heading size="sm">md</Heading>

        <Input
          color="purple"
          variant="normal"
          borderSize="md"
          placeholder="medium border outline"
          m="xs"
        />
        <Input
          color="purple"
          variant="outline"
          borderSize="md"
          placeholder="medium border outline"
          m="xs"
        />
      </Box>

      <Box mb="sm">
        <Heading size="sm">lg</Heading>

        <Input
          color="yellow"
          variant="normal"
          borderSize="lg"
          placeholder="large border outline"
          m="xs"
        />
        <Input
          color="yellow"
          variant="outline"
          borderSize="lg"
          placeholder="large border outline"
          m="xs"
        />
      </Box>
    </Box>
  )
}
