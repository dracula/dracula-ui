import { ColorMap } from '@/base/colors'
import React, { HTMLAttributes } from 'react'
import cx from 'classnames'

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

/** Select Props */
export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  /** The Dracula UI theme color for the Select. */
  color?: keyof typeof selectColors

  /**
   * The variation to be used for the Select element.
   * `normal` -> Regular Select component with a light background color.
   * `outline` -> Keeps the accent color, but removes the background.
   */
  variant?: keyof typeof selectVariants
}

/**
 * Select is a styled HTML Select element.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS, and small SVG component in order to keep Selects accessible.
 */
export const Select: React.FC<SelectProps> = (props: SelectProps) => {
  const finalProps = {
    ...props,
    className: cx(
      'drac-seelect',
      'drac-text',
      'drac-text-md',
      props.variant && selectVariants[props.variant],
      props.color && selectColors[props.color]
    )
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
