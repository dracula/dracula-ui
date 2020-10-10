import React, { HTMLAttributes } from 'react'
import { colors as backgroundColors } from '../../base/colors'
import cx from 'classnames'
import { TextColors } from '../../components/Typography/Text'

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
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** A Dracula UI theme color for the Button. */
  color?: keyof typeof backgroundColors

  /**
   * Controls the size of the button based on pre-configured Dracula UI sizes.
   * Options: `xsmall`, `small`, `medium`, `large`
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
}

/**
 * The Button component triggers actions, behaviors, or events based
 * on user input.
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const isOutline = props.variant === 'outline'
  const isGhost = props.variant === 'ghost'
  const overrideTextColor = isOutline || isGhost

  const textColorClass = overrideTextColor
    ? TextColors[props.color ?? 'green']
    : undefined

  let backgroundClass = backgroundColors[props.color ?? 'green']
  if (isGhost) {
    backgroundClass = `${backgroundClass}-transparent`
  }

  const classes = cx(
    'drac-btn',
    backgroundClass,
    buttonVariants[props.variant ?? 'normal'],
    buttonSizes[props.size ?? 'medium'],
    textColorClass
  )

  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  )
}

Button.displayName = 'Button'
