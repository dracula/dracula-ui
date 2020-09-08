import React from 'react'

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

export interface TextProps {
  size: keyof typeof TextSizes
  weigth: keyof typeof TextWeights
}

export const Text: React.FC<TextProps> = props => {
  const finalProps = {
    ...props,
    className: `drac-text ${TextSizes[props.size]} ${TextWeights[props.weigth]}`
  }

  return <span {...finalProps}>{props.children}</span>
}
