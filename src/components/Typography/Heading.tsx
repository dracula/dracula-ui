import React from 'react'
import { mapValues } from 'lodash'
import { colors } from '../Color/Box'

export const HeadingSizes = {
  'heading-1': 'drac-heading-1',
  'heading-2': 'drac-heading-2',
  'heading-3': 'drac-heading-3',
  'heading-4': 'drac-heading-4'
}

export const HeadingColors = mapValues(colors, className => {
  return className.replace('-bg-', '-text-')
})

export interface HeadingProps {
  size?: keyof typeof HeadingSizes
  color?: keyof typeof HeadingColors
}

export const Heading: React.FC<HeadingProps> = props => {
  const tag = {
    'heading-1': 'h1',
    'heading-2': 'h2',
    'heading-3': 'h3',
    'heading-4': 'h4'
  }

  const size = tag[props.size ?? 'heading-1']
  const finalProps = {
    ...props,
    className: `
      drac-heading
      ${HeadingSizes[props.size ?? 'heading-1']}
      ${HeadingColors[props.color ?? 'black']}
    `.trim()
  }

  return React.createElement(size, finalProps, props.children)
}
