import React, { HTMLAttributes } from 'react'
import cx from 'classnames'

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

export const spacing = {
  none: 'drac-spacing-none',
  small: 'drac-spacing-sm',
  medium: 'drac-spacing-md',
  large: 'drac-spacing-lg'
}

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  color?: keyof typeof colors
  spacing?: keyof typeof spacing
}

export const Box: React.FC<BoxProps> = props => {
  const finalProps = {
    ...props,
    className: cx(
      `drac-box`,
      props.color && colors[props.color],
      props.spacing && spacing[props.spacing],
      props.className
    )
  }

  return <div {...finalProps} />
}
