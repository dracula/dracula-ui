import React from 'react'
import { HeadingProps, Heading, headingSizes, headingColors } from '@/index'

export default {
  title: 'Heading'
}

export const HeadingBasic = () => <Heading>Heading</Heading>

export const HeadingSizes = () => (
  <div>
    {Object.keys(headingSizes).map((size) => {
      return (
        <div key={size} style={{ marginBottom: 20 }}>
          <Heading color="white" size={size as HeadingProps['size']}>
            {size}
          </Heading>
        </div>
      )
    })}
  </div>
)

export const HeadingColors = () => (
  <div>
    {Object.keys(headingColors).map((color) => {
      return (
        <div key={color} style={{ marginBottom: 20 }}>
          <Heading key={color} color={color as HeadingProps['color']}>
            {color}
          </Heading>
        </div>
      )
    })}
  </div>
)
