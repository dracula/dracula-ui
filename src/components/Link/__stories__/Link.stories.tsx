import React from 'react'
import { LinkProps, Link, textSizes, textWeights, textColors } from '@/index'

export default {
  title: 'Link'
}

export const LinkBasic = () => <Link>Link</Link>

export const LinkSizings = () => (
  <div>
    {Object.keys(textSizes).map((size) => {
      return (
        <div key={size} style={{ marginBottom: 20 }}>
          <Link size={size as LinkProps['size']}>{size}</Link>
        </div>
      )
    })}
  </div>
)

export const LinkWeights = () => (
  <div>
    {Object.keys(textWeights).map((weight) => {
      return (
        <div key={weight} style={{ marginBottom: 20 }}>
          <Link weight={weight as LinkProps['weight']}>{weight}</Link>
        </div>
      )
    })}
  </div>
)

export const LinkColors = () => (
  <div>
    {Object.keys(textColors).map((color) => {
      return (
        <div key={color} style={{ marginBottom: 20 }}>
          <Link color={color as LinkProps['color']}>{color}</Link>
        </div>
      )
    })}
  </div>
)
