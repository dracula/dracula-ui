import { ColorMap } from '../../base/colors'
import React, { HTMLAttributes } from 'react'

export const switchColors: ColorMap = {
  black: 'drac-switch-black',
  white: 'drac-switch-white',
  cyan: 'drac-switch-cyan',
  green: 'drac-switch-green',
  orange: 'drac-switch-orange',
  pink: 'drac-switch-pink',
  purple: 'drac-switch-purple',
  red: 'drac-switch-red',
  yellow: 'drac-switch-yellow',
  animated: '',
  cyanGreen: '',
  pinkPurple: '',
  purpleCyan: '',
  yellowPink: ''
}

/** Switch Props. */
export interface SwitchProps extends HTMLAttributes<HTMLInputElement> {
  /** The name of the form element. */
  name?: string

  /**
   * The Dracula UI theme color to be applied to the Switch.
   */
  color: keyof typeof switchColors

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
export const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  const finalProps = {
    ...props,
    className: `drac-switch drac-checkbox ${switchColors[props.color]}`
  }

  return <input type="checkbox" {...finalProps} />
}

Switch.displayName = 'Switch'
