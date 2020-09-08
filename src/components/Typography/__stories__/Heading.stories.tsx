import React from 'react'
import { HeadingProps, Heading, HeadingSizes, Box } from '../../..'
import { colorname } from '../../../story-helpers/random-color'

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
