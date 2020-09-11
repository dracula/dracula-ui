import { ColorMap } from '@/base/colors'
import React, { HTMLAttributes } from 'react'

export const selectVariants = {
  normal: 'drac-select',
  outline: 'drac-select-outline'
}

export const selectColors: ColorMap = {
  black: 'drac-select-black',
  white: 'drac-select-white',
  cyan: 'drac-select-cyan',
  green: 'drac-select-green',
  orange: 'drac-select-orange',
  pink: 'drac-select-pink',
  purple: 'drac-select-purple',
  red: 'drac-select-red',
  yellow: 'drac-select-yellow',
  animated: '',
  cyanGreen: '',
  pinkPurple: '',
  purpleCyan: '',
  yellowPink: ''
}

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  variant: keyof typeof selectVariants
  color: keyof typeof selectColors
}

export const Select: React.FC<SelectProps> = (props) => {
  const finalProps = {
    ...props,
    className: `drac-select drac-text drac-text-md ${
      selectVariants[props.variant]
    } ${selectColors[props.color]}`
  }

  return (
    <div style={{ position: 'relative' }}>
      <select {...finalProps} />
      <div className={`drac-select-arrow drac-text-${props.color}`}>
        <svg
          viewBox="0 0 24 24"
          focusable="false"
          role="presentation"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

Select.displayName = 'Select'
