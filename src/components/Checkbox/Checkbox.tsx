import React, { HTMLAttributes } from 'react'
import cx from 'classnames/dedupe'
import { ColorMap } from '../../base/colors'

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
export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  /** The Dracula UI theme color for the checkbox. */
  color?: keyof typeof checkboxColors
  /** The name of the checkbox. Mirrors the name HTML attribute. */
  name?: string

  disabled?: boolean
}

/**
 * Checkbox is a styled HTML Input of type checkbox.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS in order to keep check boxes accessible.
 */
export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const finalProps = {
    ...props,
    className: cx(`drac-checkbox`, props.color && checkboxColors[props.color])
  }

  return <input type="checkbox" {...finalProps} />
}

Checkbox.displayName = 'Checkbox'
