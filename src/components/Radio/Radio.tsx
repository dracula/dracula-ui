import { ColorMap } from '../../base/colors'
import React, { HTMLAttributes } from 'react'

export const radioColors: ColorMap = {
  black: 'drac-radio-black',
  white: 'drac-radio-white',
  cyan: 'drac-radio-cyan',
  green: 'drac-radio-green',
  orange: 'drac-radio-orange',
  pink: 'drac-radio-pink',
  purple: 'drac-radio-purple',
  red: 'drac-radio-red',
  yellow: 'drac-radio-yellow',
  animated: '',
  cyanGreen: '',
  pinkPurple: '',
  purpleCyan: '',
  yellowPink: ''
}

/** Radio Props */
export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  /** The Dracula UI theme color for the radio button. */
  color: keyof typeof radioColors

  /** The name of the radio. Mirrors the name HTML attribute. */
  name?: string
}

/**
 * Radio is a styled HTML Input of type radio.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS in order to keep Radios accessible.
 */
export const Radio: React.FC<RadioProps> = (props: RadioProps) => {
  const finalProps = {
    ...props,
    className: `drac-radio ${radioColors[props.color]}`
  }

  return <input type="radio" {...finalProps} />
}

Radio.displayName = 'Radio'
