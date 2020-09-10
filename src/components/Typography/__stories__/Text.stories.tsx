import React from 'react'
import {
  TextProps,
  Text,
  TextSizes,
  TextWeights,
  TextColors,
  Box,
  Heading
} from '@/index'
import { colorname } from '@/story-helpers/random-color'

export default {
  title: 'Text'
}

export const Texts = () => (
  <div>
    {Object.keys(TextSizes).map(size => {
      return (
        <Heading size="heading-2">
          {size}

          {Object.keys(TextWeights).map(weight => {
            return (
              <Box
                key={`${size}-${weight}`}
                color={colorname()}
                style={{ padding: '1rem' }}
              >
                <Text
                  size={size as TextProps['size']}
                  weight={weight as TextProps['weight']}
                >
                  .{TextSizes[size]} .{TextWeights[weight]}
                </Text>
              </Box>
            )
          })}
        </Heading>
      )
    })}
  </div>
)

export const TextWithColors = () => (
  <div>
    return (
    <Heading size="heading-2">
      Colors
      {Object.keys(TextColors).map(color => {
        return (
          <Box key={color} style={{ padding: '1rem' }}>
            <Text color={color as TextProps['color']}>
              .{TextColors[color]}
            </Text>
          </Box>
        )
      })}
    </Heading>
  </div>
)
