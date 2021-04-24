import cx from 'classnames/dedupe'
import React, { SelectHTMLAttributes } from 'react'
import { ColorMap } from '../../base/colors'
import {
  cleanProps,
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
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    PaddingMixin,
    MarginMixin {
  /** The Dracula UI theme color for the Select. */
  color?: keyof typeof selectColors

  /**
   * Controls the size of the select based on pre-configured Dracula UI sizes.
   */
  size?:
    | keyof typeof selectSizes
    | SelectHTMLAttributes<HTMLSelectElement>['size']

  /**
   * The variation to be used for the Select element.
   * `normal` -> Regular Select component with a light background color.
   * `outline` -> Keeps the accent color, but removes the background.
   */
  variant?: keyof typeof selectVariants

  /**
   * A disabled select is unusable and un-clickable.
   */
  disabled?: boolean
}

/**
 * Select is a styled HTML Select element.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS, and small SVG component in order to keep Selects accessible.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { size, variant, color, disabled, ...htmlProps } = props

    const finalProps: SelectHTMLAttributes<HTMLSelectElement> = {
      disabled,
      ...htmlProps,
      className: cx(
        'drac-select',
        props.className,
        variant && selectVariants[variant],
        typeof size === 'string' && size && selectSizes[size],
        color && selectColors[color],
        ...paddingMixin(props),
        ...marginMixin(props)
      )
    }

    if (typeof size === 'number') {
      finalProps.size = size
    }

    return (
      <div style={{ position: 'relative' }}>
        <select ref={ref} {...cleanProps(finalProps)} />
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
)

Select.displayName = 'Select'
