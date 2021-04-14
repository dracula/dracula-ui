import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
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
        'Sizes & Weights',
        SizesWeights,
        `Anchor sizes can be customized with pre defined sizes or using regular HTML styles or CSS classes.`
      ),
      snapshot(
        'Colors',
        Colors,
        `Anchors can be customized to use any of the Dracula UI theme colors, including all solid, and gradients.`
      )
    ]
  }
})

function Usage() {
  return (
    <Anchor href="#" color="purple" hoverColor="pinkPurple">Visit the Dracula Castle</Anchor>
  )
}

function SizesWeights() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Anchor href="#" size="xs">
        xs
      </Anchor>
      <Anchor href="#" size="sm">
        sm
      </Anchor>
      <Anchor href="#" size="md">
        md
      </Anchor>
      <Anchor href="#" size="lg">
        lg
      </Anchor>
      <Anchor href="#" weight="semibold">
        semibold
      </Anchor>
      <Anchor href="#" style={{ fontSize: 30 }}>
        font-size: 30
      </Anchor>
    </div>
  )
}

function Colors() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Anchor href="#" color="pink" hoverColor="purple" m="sm">
        pink / purple
      </Anchor>

      <Anchor href="#" color="cyanGreen" hoverColor="yellowPink" m="sm">
        cyanGreen / yellowPink
      </Anchor>
    </div>
  )
}