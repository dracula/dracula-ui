import cx from 'classnames/dedupe'
import React, { HTMLAttributes } from 'react'
import { ColorMap } from '../../base/colors'
import {
  marginMixin,
  MarginMixin,
  paddingMixin,
  PaddingMixin
} from '../../base/spacing'

export const selectVariants = {
  normal: 'drac-select',
  outline: 'drac-select-outline'
}

export const selectSizes = {
  large: 'drac-select-lg',
  medium: 'drac-select',
  small: 'drac-select-sm'
}

export const selectColors: Partial<ColorMap> = {
  white: 'drac-select-white',
  cyan: 'drac-select-cyan',
  green: 'drac-select-green',
  orange: 'drac-select-orange',
  pink: 'drac-select-pink',
  purple: 'drac-select-purple',
  red: 'drac-select-red',
  yellow: 'drac-select-yellow'
}

/** Select Props */
export interface SelectProps
  extends HTMLAttributes<HTMLSelectElement>,
    PaddingMixin,
    MarginMixin {
  /** The Dracula UI theme color for the Select. */
  color?: keyof typeof selectColors

  /**
   * Controls the size of the select based on pre-configured Dracula UI sizes.
   * Options: `small`, `medium`, `large`
   */
  size?: keyof typeof selectSizes

  /**
   * The variation to be used for the Select element.
   * `normal` -> Regular Select component with a light background color.
   * `outline` -> Keeps the accent color, but removes the background.
   */
  variant?: keyof typeof selectVariants

  disabled?: boolean
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
      'drac-select',
      props.variant && selectVariants[props.variant],
      props.size && selectSizes[props.size],
      props.color && selectColors[props.color],
      ...paddingMixin(props),
      ...marginMixin(props)
    )
  }

  const { size, ...cleanProps } = finalProps

  return (
    <div style={{ position: 'relative' }}>
      <select {...cleanProps} />
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
