import React from 'react'
import {
  ParagraphProps,
  Paragraph,
  textSizes,
  textWeights,
  textColors
} from '@/index'

export default {
  title: 'Paragraph'
}

export const ParagraphBasic = () => <Paragraph>Paragraph</Paragraph>

export const ParagraphSizes = () => (
  <div>
    {Object.keys(textSizes).map((size) => {
      return (
        <div key={size} style={{ marginBottom: 20 }}>
          <Paragraph size={size as ParagraphProps['size']}>{size}</Paragraph>
        </div>
      )
    })}
  </div>
)

export const ParagraphWeights = () => (
  <div>
    {Object.keys(textWeights).map((weight) => {
      return (
        <div key={weight} style={{ marginBottom: 20 }}>
          <Paragraph weight={weight as ParagraphProps['weight']}>
            {weight}
          </Paragraph>
        </div>
      )
    })}
  </div>
)

export const ParagraphColors = () => (
  <div>
    {Object.keys(textColors).map((color) => {
      return (
        <div key={color} style={{ marginBottom: 20 }}>
          <Paragraph color={color as ParagraphProps['color']}>
            {color}
          </Paragraph>
        </div>
      )
    })}
  </div>
)
