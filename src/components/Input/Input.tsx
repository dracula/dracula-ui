import cx from 'classnames/dedupe'
import React, { InputHTMLAttributes } from 'react'
import { BaseColorMap } from '../../base/colors'
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
  lg: 'drac-input-lg',
  md: 'drac-input',
  sm: 'drac-input-sm'
}

export const borderSizes = {
  lg: 'drac-input-border-lg',
  md: 'drac-input-border-md',
  sm: 'drac-input-border-sm'
}

export const inputColors: BaseColorMap & { white: string } = {
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
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
    PaddingMixin,
    MarginMixin {
  /**
   * The Dracula UI theme color to be used
   */
  color?: keyof typeof inputColors

  /**
   * Controls the size of the input based on pre-configured Dracula UI sizes.
   */
  size?: keyof typeof inputSizes | number

  /**
   * Controls the border size of the input based on pre-configured Dracula UI sizes.
   */
  borderSize?: keyof typeof borderSizes

  /**
   * Controls the variation the input.
   * `normal` -> Regular Input component with a light background color.
   * `outline` -> Keeps the accent color, but removes the background.
   */
  variant?: keyof typeof inputVariants

  /**
   * Controls the type of the input.
   */
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
}

/**
 * Input is a styled HTML Input.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS in order to keep inputs accessible.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { color, size, borderSize, variant, ...htmlProps } = props

    const finalProps: Record<string, any> = {
      ...htmlProps,
      className: cx(
        `drac-input`,
        props.className,
        variant && inputVariants[variant],
        size && typeof size === 'string' && inputSizes[size],
        borderSize && borderSizes[borderSize],
        color && inputColors[color],
        ...paddingMixin(props),
        ...marginMixin(props)
      )
    }

    if (size && typeof size === 'number') {
      finalProps[size] = size
    }

    return <input ref={ref} {...cleanProps(finalProps)} />
  }
)

Input.displayName = 'Input'
