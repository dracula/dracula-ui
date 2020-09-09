import React, { HTMLAttributes } from 'react'
import { colors } from '../Color/Box'
import { mapValues } from 'lodash'

export const TextSizes = {
  large: 'drac-text-lg',
  medium: 'drac-text-md',
  normal: 'drac-text',
  small: 'drac-text-sm'
}

export const TextWeights = {
  normal: 'drac-text',
  semibold: 'drac-text-semibold',
  bold: 'drac-text-bold'
}

export const TextColors = mapValues(colors, className => {
  return className.replace('-bg-', '-text-')
})

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: keyof typeof TextSizes
  weight?: keyof typeof TextWeights
  color?: keyof typeof TextColors
}

export const Text: React.FC<TextProps> = props => {
  const finalProps = {
    ...props,
    className: `
      drac-text ${TextSizes[props.size ?? 'normal']}
      ${TextWeights[props.weight ?? 'normal']}
      ${TextColors[props.color ?? 'black']}
    `.trim()
  }

  return <span {...finalProps}>{props.children}</span>
}
