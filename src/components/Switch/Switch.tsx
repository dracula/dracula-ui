import { ColorMap } from '../../base/colors'
import React, { HTMLAttributes } from 'react'
import {
  cleanProps,
  marginMixin,
  MarginMixin,
  paddingMixin,
  PaddingMixin
} from '../../base/spacing'
import classNamesDedupe from 'classnames/dedupe'

export const switchColors: Partial<ColorMap> = {
  white: 'drac-switch-white',
  cyan: 'drac-switch-cyan',
  green: 'drac-switch-green',
  orange: 'drac-switch-orange',
  pink: 'drac-switch-pink',
  purple: 'drac-switch-purple',
  red: 'drac-switch-red',
  yellow: 'drac-switch-yellow'
}

/** Switch Props. */
export interface SwitchProps
  extends HTMLAttributes<HTMLInputElement>,
    PaddingMixin,
    MarginMixin {
  /** The name of the form element. */
  name?: string

  /**
   * The Dracula UI theme color to be applied to the Switch.
   */
  color: keyof typeof switchColors

  /**
   * A disabled switch is unusable and un-clickable.
   */
  disabled?: boolean
}

/**
 * Switch is an abstraction pattern that represents toggles.
 *
 * Use the Switch component as an alternative for Checkboxes or Radios
 * when options are binary.
 *
 * Switches are implemented as Checkboxes under the hood,
 * and work normally with forms.
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const { name, color, disabled, ...htmlProps } = props

    const finalProps = {
      name,
      disabled,
      ...htmlProps,
      className: classNamesDedupe(
        `drac-switch`,
        'drac-checkbox',
        props.className,
        switchColors[color],
        ...paddingMixin(props),
        ...marginMixin(props)
      )
    }

    return <input type="checkbox" ref={ref} {...cleanProps(finalProps)} />
  }
)

Switch.displayName = 'Switch'
