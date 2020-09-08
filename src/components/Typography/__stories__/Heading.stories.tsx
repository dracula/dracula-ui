import React from 'react'
import { HeadingProps, Heading, HeadingSizes, Box } from '../../..'
import { colorname } from '../../../story-helpers/random-color'
import { HeadingColors } from '../Heading'

export default {
  title: 'Headings'
}

export const Headers = (props?: Partial<HeadingProps>) => (
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

export const HeadersWithColors = (props?: Partial<HeadingProps>) => (
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
