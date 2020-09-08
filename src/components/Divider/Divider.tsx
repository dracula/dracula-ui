import React, { HTMLAttributes } from 'react'

export const dividerColors = {
  black: 'drac-border-black',
  white: 'drac-border-white',
  cyan: 'drac-border-cyan',
  green: 'drac-border-green',
  orange: 'drac-border-orange',
  pink: 'drac-border-pink',
  purple: 'drac-border-purple',
  red: 'drac-border-red',
  yellow: 'drac-border-yellow'
}

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  color: keyof typeof dividerColors
}

export const Divider: React.FC<DividerProps> = props => {
  const finalProps = {
    ...props,
    className: `drac-divider ${dividerColors[props.color]}`
  }

  return <hr {...finalProps} />
}
