import { ColorMap } from '@/base/colors'
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

export interface SwitchProps extends HTMLAttributes<HTMLInputElement> {
  color: keyof typeof switchColors
  name?: string
}

export const Switch: React.FC<SwitchProps> = (props) => {
  const finalProps = {
    ...props,
    className: `drac-switch drac-checkbox ${switchColors[props.color]}`
  }

  return <input type="checkbox" {...finalProps} />
}

Switch.displayName = 'Switch'
