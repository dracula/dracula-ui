import { ColorMap } from '@/base/colors'
import React, { HTMLAttributes } from 'react'

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

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  variant: keyof typeof inputVariants
  color: keyof typeof inputColors
}

export const Input: React.FC<InputProps> = (props) => {
  const finalProps = {
    ...props,
    className: `drac-input drac-text drac-text-md ${
      inputVariants[props.variant]
    } ${inputColors[props.color]}`
  }

  return <input {...finalProps} />
}

Input.displayName = 'Input'
