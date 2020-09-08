import React, { HTMLAttributes } from 'react'

export const colors = {
  black: 'drac-bg-black',
  white: 'drac-bg-white',
  cyan: 'drac-bg-cyan',
  green: 'drac-bg-green',
  orange: 'drac-bg-orange',
  pink: 'drac-bg-pink',
  purple: 'drac-bg-purple',
  red: 'drac-bg-red',
  yellow: 'drac-bg-yellow',
  purpleCyan: 'drac-bg-purple-cyan',
  yellowPink: 'drac-bg-yellow-pink',
  cyanGreen: 'drac-bg-cyan-green',
  pinkPurple: 'drac-bg-pink-purple',
  animated: 'drac-bg-animated'
}

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  color?: keyof typeof colors
}

export const Box: React.FC<BoxProps> = props => {
  const finalProps = {
    ...props,
    className: `drac-box ${colors[props.color ?? 'black']}`
  }

  return <div {...finalProps} />
}
