import { ColorMap } from '../../base/colors'
import React, { HTMLAttributes } from 'react'
import cx from 'classnames'

export const inputVariants = {
  normal: 'drac-input',
  outline: 'drac-input-outline'
}

export const inputColors: ColorMap = {
  black: 'drac-input-black drac-text-white',
  white: 'drac-input-white drac-text-white',
  cyan: 'drac-input-cyan drac-text-cyan',
  green: 'drac-input-green drac-text-green',
  orange: 'drac-input-orange drac-text-orange',
  pink: 'drac-input-pink drac-text-pink',
  purple: 'drac-input-purple drac-text-purple',
  red: 'drac-input-red drac-text-red',
  yellow: 'drac-input-yellow drac-text-yellow',
  animated: '',
  cyanGreen: '',
  pinkPurple: '',
  purpleCyan: '',
  yellowPink: ''
}

/** Input Props */
export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * The Dracula UI theme color to be used
   */
  color?: keyof typeof inputColors

  /**
   * Controls the variation the input.
   * `normal` -> Regular Input component with a light background color.
   * `outline` -> Keeps the accent color, but removes the background.
   */
  variant?: keyof typeof inputVariants
}

/**
 * Input is a styled HTML Input.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS in order to keep inputs accessible.
 */
export const Input: React.FC<InputProps> = (props: InputProps) => {
  const finalProps = {
    ...props,
    className: cx(
      `drac-input`,
      `drac-text`,
      `drac-text-md`,
      props.variant && inputVariants[props.variant],
      props.color && inputColors[props.color]
    )
  }

  return <input {...finalProps} />
}

Input.displayName = 'Input'
