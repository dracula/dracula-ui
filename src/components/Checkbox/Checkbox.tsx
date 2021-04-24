import cx from 'classnames/dedupe'
import React, { InputHTMLAttributes } from 'react'
import { ColorMap } from '../../base/colors'
import {
  cleanProps,
  marginMixin,
  MarginMixin,
  paddingMixin,
  PaddingMixin
} from '../../base/spacing'

export const checkboxColors: Partial<ColorMap> = {
  white: 'drac-checkbox-white',
  cyan: 'drac-checkbox-cyan',
  green: 'drac-checkbox-green',
  orange: 'drac-checkbox-orange',
  pink: 'drac-checkbox-pink',
  purple: 'drac-checkbox-purple',
  red: 'drac-checkbox-red',
  yellow: 'drac-checkbox-yellow'
}

/** Checkbox Props */
export interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement>,
    PaddingMixin,
    MarginMixin {
  /** The Dracula UI theme color for the checkbox. */
  color?: keyof typeof checkboxColors
  /** The name of the checkbox. Mirrors the name HTML attribute. */
  name?: string

  /**
   * A disabled checkbox is unusable and un-clickable.
   */
  disabled?: boolean
}

/**
 * Checkbox is a styled HTML Input of type checkbox.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS in order to keep check boxes accessible.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { className, color, name, disabled, ...htmlProps } = props

    const finalProps = {
      name,
      disabled,
      ...htmlProps,
      className: cx(
        `drac-checkbox`,
        className,
        color && checkboxColors[color],
        ...paddingMixin(props),
        ...marginMixin(props)
      )
    }

    return <input type="checkbox" ref={ref} {...cleanProps(finalProps)} />
  }
)

Checkbox.displayName = 'Checkbox'
