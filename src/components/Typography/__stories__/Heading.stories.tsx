import React from 'react'
import {
  HeadingProps,
  Heading,
  HeadingSizes,
  Box,
  HeadingColors
} from '@/index'
import { colorname } from '@/story-helpers/random-color'

export default {
  title: 'Headings'
}

export const Headers = () => (
  <div>
    {Object.keys(HeadingSizes).map(size => {
      return (
        <Box
          color={colorname()}
          style={{
            borderRadius: 20,
            padding: '1rem 3rem',
            margin: '1rem'
          }}
        >
          <Heading key={size} size={size as HeadingProps['size']}>
            .{HeadingSizes[size]}
          </Heading>
        </Box>
      )
    })}
  </div>
)

export const HeadersWithColors = () => (
  <div>
    {Object.keys(HeadingColors).map(color => {
      return (
        <Box
          color="black"
          style={{
            borderRadius: 20,
            padding: '1rem 3rem',
            margin: '1rem'
          }}
        >
          <Heading key={color} color={color as HeadingProps['color']}>
            .{HeadingColors[color]}
          </Heading>
        </Box>
      )
    })}
  </div>
)
