import React from 'react'

export interface HeadingProps {
  size: 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4'
}

export const Heading: React.FC<HeadingProps> = (props) => {
  const tag: Record<HeadingProps['size'], string> = {
    'heading-1': 'h1',
    'heading-2': 'h2',
    'heading-3': 'h3',
    'heading-4': 'h4'
  }

  const size = tag[props.size]
  const finalProps = {
    ...props,
    className: `drac-Heading drac-Heading--${props.size}`
  }

  return React.createElement(size, finalProps, props.children)
}
