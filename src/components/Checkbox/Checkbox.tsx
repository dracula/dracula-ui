import React, { HTMLAttributes } from 'react'
import cx from 'classnames'
import { ColorMap } from '@/base/colors'

export const checkboxColors: ColorMap = {
  black: 'drac-checkbox-black',
  white: 'drac-checkbox-white',
  cyan: 'drac-checkbox-cyan',
  green: 'drac-checkbox-green',
  orange: 'drac-checkbox-orange',
  pink: 'drac-checkbox-pink',
  purple: 'drac-checkbox-purple',
  red: 'drac-checkbox-red',
  yellow: 'drac-checkbox-yellow',
  animated: '',
  cyanGreen: '',
  pinkPurple: '',
  purpleCyan: '',
  yellowPink: ''
}

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  color?: keyof typeof checkboxColors
  name?: string
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const finalProps = {
    ...props,
    className: cx(`drac-checkbox`, props.color && checkboxColors[props.color])
  }

  return <input type="checkbox" {...finalProps} />
}

Checkbox.displayName = 'Checkbox'
