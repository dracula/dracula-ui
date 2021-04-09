import cx from 'classnames/dedupe'
import React, { HTMLAttributes } from 'react'
import { ColorMap } from '../../base/colors'
import {
  cleanProps,
  marginMixin,
  MarginMixin,
  paddingMixin,
  PaddingMixin
} from '../../base/spacing'

export const inputVariants = {
  normal: 'drac-input',
  outline: 'drac-input-outline'
}

export const inputSizes = {
  large: 'drac-input-lg',
  medium: 'drac-input',
  small: 'drac-input-sm'
}

export const inputColors: Partial<ColorMap> = {
  white: 'drac-input-white drac-text-white',
  cyan: 'drac-input-cyan drac-text-cyan',
  green: 'drac-input-green drac-text-green',
  orange: 'drac-input-orange drac-text-orange',
  pink: 'drac-input-pink drac-text-pink',
  purple: 'drac-input-purple drac-text-purple',
  red: 'drac-input-red drac-text-red',
  yellow: 'drac-input-yellow drac-text-yellow'
}

/** Input Props */
export interface InputProps
  extends HTMLAttributes<HTMLInputElement>,
    PaddingMixin,
    MarginMixin {
  /**
   * The Dracula UI theme color to be used
   */
  color?: keyof typeof inputColors

  /**
   * Controls the size of the input based on pre-configured Dracula UI sizes.
   */
  size?: keyof typeof inputSizes

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
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { color, size, variant, ...htmlProps } = props

    const finalProps = {
      ...htmlProps,
      className: cx(
        `drac-input`,
        props.className,
        variant && inputVariants[variant],
        size && inputSizes[size],
        color && inputColors[color],
        ...paddingMixin(props),
        ...marginMixin(props)
      )
    }

    return <input ref={ref} {...cleanProps(finalProps)} />
  }
)

Input.displayName = 'Input'
