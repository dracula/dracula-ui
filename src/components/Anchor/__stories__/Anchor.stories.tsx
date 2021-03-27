import React from 'react'
import { AnchorProps, Anchor, textSizes, textWeights, textColors } from '@/index'

export default {
  title: 'Anchor'
}

export const AnchorBasic = () => <Anchor>Anchor</Anchor>

export const AnchorSizings = () => (
  <div>
    {Object.keys(textSizes).map((size) => {
      return (
        <div key={size} style={{ marginBottom: 20 }}>
          <Anchor size={size as AnchorProps['size']}>{size}</Anchor>
        </div>
      )
    })}
  </div>
)

export const AnchorWeights = () => (
  <div>
    {Object.keys(textWeights).map((weight) => {
      return (
        <div key={weight} style={{ marginBottom: 20 }}>
          <Anchor weight={weight as AnchorProps['weight']}>{weight}</Anchor>
        </div>
      )
    })}
  </div>
)

export const AnchorColors = () => (
  <div>
    {Object.keys(textColors).map((color) => {
      return (
        <div key={color} style={{ marginBottom: 20 }}>
          <Anchor color={color as AnchorProps['color']}>{color}</Anchor>
        </div>
      )
    })}
  </div>
)
