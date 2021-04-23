import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { Anchor } from '@/components/Anchor/Anchor'

docs(Anchor, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      `Anchor is an abstraction/style that can/is applied to HTML anchor elements.`
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        Colors,
        `Anchors can be customized to use any of the Dracula UI theme colors, including all solid, and gradients.`
      ),
      snapshot(
        'Weights',
        Weights,
        'Anchors can be defined in different font weights.'
      ),
      snapshot(
        'Sizes',
        Sizes,
        'Anchors can be customize to use several different sizes.'
      ),
    ]
  }
})

function Usage() {
  return (
    <Anchor href="#">Visit the Dracula Castle</Anchor>
  )
}

function Weights() {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      <Anchor href="#" weight="normal" mb="sm">normal</Anchor>
      <Anchor href="#" weight="semibold" mb="sm">semibold</Anchor>
      <Anchor href="#" weight="bold" mb="sm">bold</Anchor>
    </Box>
  )
}

function Sizes() {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      <Anchor href="#" size="xs" mb="sm">xs</Anchor>
      <Anchor href="#" size="sm" mb="sm">sm</Anchor>
      <Anchor href="#" size="md" mb="sm">md</Anchor>
      <Anchor href="#" size="lg" mb="sm">lg</Anchor>
    </Box>
  )
}

function Colors() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Anchor href="#" color="purple" hoverColor="pink" mb="sm">
        purple / pink
      </Anchor>

      <Anchor href="#" color="cyanGreen" hoverColor="yellowPink" mb="sm">
        cyanGreen / yellowPink
      </Anchor>
    </div>
  )
}