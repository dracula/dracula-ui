import React, { HTMLAttributes } from 'react'
import cx from 'classnames'
import { mapValues } from 'lodash'

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

export const borderColors = mapValues(colors, className =>
  className.replace('-bg-', '-border-')
)

export const spacing = {
  none: 'drac-spacing-none',
  noneX: 'drac-spacing-none-x',
  noneY: 'drac-spacing-none-y',
  small: 'drac-spacing-sm',
  smallX: 'drac-spacing-sm-x',
  smallY: 'drac-spacing-sm-y',
  medium: 'drac-spacing-md',
  mediumX: 'drac-spacing-md-x',
  mediumY: 'drac-spacing-md-y',
  large: 'drac-spacing-lg',
  largeX: 'drac-spacing-lg-x',
  largeY: 'drac-spacing-lg-y'
}

export type SpacingPropType = keyof typeof spacing | Array<keyof typeof spacing>

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  color?: keyof typeof colors
  spacing?: SpacingPropType
}

export function spacingClasses(input?: SpacingPropType): string[] {
  let spacingInput = input ?? []

  if (!Array.isArray(spacingInput)) {
    spacingInput = [spacingInput]
  }

  spacingInput = spacingInput as Array<keyof typeof spacing>

  return spacingInput.map(spc => {
    return spacing[spc]
  })
}

export const Box: React.FC<BoxProps> = props => {
  const finalProps = {
    ...props,
    className: cx(
      `drac-box`,
      props.color && colors[props.color],
      ...spacingClasses(props.spacing),
      props.className
    )
  }

  return <div {...finalProps} />
}
