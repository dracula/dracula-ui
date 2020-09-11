import { ColorMap } from '@/base/colors'
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

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  color: keyof typeof radioColors
  name?: string
}

export const Radio: React.FC<RadioProps> = (props) => {
  const finalProps = {
    ...props,
    className: `drac-radio ${radioColors[props.color]}`
  }

  return <input type="radio" {...finalProps} />
}

Radio.displayName = 'Radio'
