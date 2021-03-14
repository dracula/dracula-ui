import React from 'react'
import { LinkProps, Link, LinkSizes, LinkWeights, LinkColors } from '@/index'

export default {
  title: 'Link'
}

export const LinkBasic = () => <Link>Link</Link>

export const LinkSizes = () => (
  <div>
    {Object.keys(LinkSizes).map((size) => {
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
    {Object.keys(LinkWeights).map((weight) => {
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
    {Object.keys(LinkColors).map((color) => {
      return (
        <div key={color} style={{ marginBottom: 20 }}>
          <Link color={color as LinkProps['color']}>{color}</Link>
        </div>
      )
    })}
  </div>
)
