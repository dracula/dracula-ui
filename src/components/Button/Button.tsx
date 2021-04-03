import React, { HTMLAttributes } from 'react'
import { colors as backgroundColors } from '../../base/colors'
import cx from 'classnames/dedupe'
import { textColors } from '../../components/Text/Text'
import {
  cleanProps,
  marginMixin,
  MarginMixin,
  paddingMixin,
  PaddingMixin
} from '../../base/spacing'

export const buttonVariants = {
  normal: 'drac-btn',
  outline: 'drac-btn-outline',
  ghost: 'drac-btn-ghost'
}

export const buttonSizes = {
  large: 'drac-btn-lg',
  medium: 'drac-btn',
  small: 'drac-btn-sm',
  xsmall: 'drac-btn-xs'
}

/** Button Props */
export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    PaddingMixin,
    MarginMixin {
  /** A Dracula UI theme color for the Button. */
  color?: keyof typeof backgroundColors

  /**
   * Controls the size of the button based on pre-configured Dracula UI sizes.
   */
  size?: keyof typeof buttonSizes

  /**
   * Controls the Button style:
   * `normal` -> Default solid Button with background color.
   * `outline` -> A subtle variation of the Button component with a softer background color that highlights the action text.
   * `ghost` -> A less prominent variation of the Button component that highlights hover interactions.
   */
  variant?: keyof typeof buttonVariants

  /**
   * Controls the Button state. Mirrors the HTMLButtonElement `disabled` property.
   */
  disabled?: boolean

  as?: 'button' | 'a' | 'input'
}

/**
 * The Button component triggers actions, behaviors, or events based
 * on user input.
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { color, size, variant, disabled, as, ...htmlProps } = props

  const isOutline = variant === 'outline'
  const isGhost = variant === 'ghost'
  const overrideTextColor = isOutline || isGhost

  const textColorClass = overrideTextColor
    ? textColors[color ?? 'green']
    : undefined

  let backgroundClass = backgroundColors[color ?? 'green']
  if (isGhost) {
    backgroundClass = `${backgroundClass}-transparent`
  }

  const classes = cx(
    'drac-btn',
    props.className,
    backgroundClass,
    buttonVariants[variant ?? 'normal'],
    buttonSizes[size ?? 'medium'],
    textColorClass,
    ...paddingMixin(props),
    ...marginMixin(props)
  )

  return React.createElement(
    as ?? 'button',
    { className: classes, disabled, ...cleanProps(htmlProps) },
    props.children
  )
}

Button.displayName = 'Button'
