import React from 'react'
import { TextProps, Text, TextSizes } from '../../..'
import { TextWeights } from '../Text'
import { Box } from '../../Color/Box'
import { colorname } from '../../../story-helpers/random-color'
import { Heading } from '../Heading'

export default {
  title: 'Text'
}

export const Texts = (props?: Partial<TextProps>) => (
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
                  weigth={weight as TextProps['weigth']}
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
