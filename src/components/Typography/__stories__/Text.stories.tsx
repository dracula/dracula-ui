import React from 'react'
import {
  TextProps,
  Text,
  textSizes,
  textWeights,
  textColors
} from '@/index'

export default {
  title: 'Text'
}

export const TextBasic = () => (
  <Text>
    Text
  </Text>
)

export const TextSizes = () => (
  <div>
    {Object.keys(textSizes).map((size) => {
      return (
        <div key={size} style={{ marginBottom: 20 }}>
          <Text size={size as TextProps['size']}>
            {size}
          </Text>
        </div>
      )
    })}
  </div>
)

export const TextWeights = () => (
  <div>
    {Object.keys(textWeights).map((weight) => {
      return (
        <div key={weight} style={{ marginBottom: 20 }}>
          <Text weight={weight as TextProps['weight']}>
            {weight}
          </Text>
        </div>
      )
    })}
  </div>
)

export const TextColors = () => (
  <div>
    {Object.keys(textColors).map((color) => {
      return (
        <div key={color} style={{ marginBottom: 20 }}>
          <Text color={color as TextProps['color']}>
            {color}
          </Text>
        </div>
      )
    })}
  </div>
)