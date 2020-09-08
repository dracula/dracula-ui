import React from 'react'

export const HeadingSizes = {
  'heading-1': 'drac-heading-1',
  'heading-2': 'drac-heading-2',
  'heading-3': 'drac-heading-3',
  'heading-4': 'drac-heading-4'
}

export interface HeadingProps {
  size: keyof typeof HeadingSizes
}

export const Heading: React.FC<HeadingProps> = props => {
  const tag: Record<HeadingProps['size'], string> = {
    'heading-1': 'h1',
    'heading-2': 'h2',
    'heading-3': 'h3',
    'heading-4': 'h4'
  }

  const size = tag[props.size]
  const finalProps = {
    ...props,
    className: `drac-heading ${HeadingSizes[props.size]}`
  }

  return React.createElement(size, finalProps, props.children)
}
