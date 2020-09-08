import React, { HTMLAttributes } from 'react'
import { colors as backgroundColors } from '../Color/Box'
import cx from 'classnames'
import { Text, TextColors } from '../Typography/Text'

const variants = {
  normal: 'drac-badge',
  subtle: 'drac-badge-subtle',
  outline: 'drac-badge-outline'
}

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  themeColor?: keyof typeof backgroundColors
  variant?: keyof typeof variants
  disabled?: boolean
}

export const Badge: React.FC<BadgeProps> = props => {
  const isOutline = props.variant === 'outline'
  const isSubtle = props.variant === 'subtle'
  const overrideTextColor = isOutline || isSubtle

  const textColorClass = overrideTextColor
    ? TextColors[props.themeColor ?? 'green']
    : undefined

  let backgroundClass = backgroundColors[props.themeColor ?? 'green']
  if (isSubtle) {
    backgroundClass = `${backgroundClass}-transparent`
  }

  const classes = cx(
    'drac-badge',
    backgroundClass,
    variants[props.variant ?? 'normal'],
    textColorClass
  )

  return (
    <span className={classes} {...props}>
      <Text color={overrideTextColor ? props.themeColor : undefined}>
        {props.children}
      </Text>
    </span>
  )
}
