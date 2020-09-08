import React, { HTMLAttributes } from 'react'
import { colors as backgroundColors } from '../Color/Box'
import cx from 'classnames'
import { Text, TextColors } from '../Typography/Text'

const variants = {
  normal: 'drac-btn',
  outline: 'drac-btn-outline',
  ghost: 'drac-btn-ghost'
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  themeColor?: keyof typeof backgroundColors
  variant?: keyof typeof variants
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = props => {
  const isOutline = props.variant === 'outline'
  const isGhost = props.variant === 'ghost'
  const overrideTextColor = isOutline || isGhost

  const textColorClass = overrideTextColor
    ? TextColors[props.themeColor ?? 'green']
    : undefined

  const classes = cx(
    'drac-btn',
    backgroundColors[props.themeColor ?? 'green'],
    variants[props.variant ?? 'normal'],
    textColorClass
  )

  return (
    <button className={classes} {...props}>
      <Text color={overrideTextColor ? props.themeColor : undefined}>
        {props.children}
      </Text>
    </button>
  )
}
