import cx from 'classnames/dedupe'
import mapValues from 'lodash/mapValues'
import React, { AllHTMLAttributes } from 'react'
import {
  backgroundColors,
  borderColors,
  glowColors,
  scrollbarColors
} from '../../base/colors'
import {
  cleanProps,
  marginMixin,
  MarginMixin,
  PaddingMixin,
  paddingMixin
} from '../../base/spacing'

type Element = HTMLElementTagNameMap

export const roundedBorders = {
  none: 'drac-rounded-none',
  sm: 'drac-rounded-sm',
  base: 'drac-rounded',
  lg: 'drac-rounded-lg',
  xl: 'drac-rounded-xl',
  '2xl': 'drac-rounded-2xl',
  '3xl': 'drac-rounded-3xl',
  full: 'drac-rounded-full'
}

export const displays = {
  none: 'drac-d-none',
  block: 'drac-d-block',
  flex: 'drac-d-flex',
  grid: 'drac-d-grid',
  table: 'drac-d-table',
  inline: 'drac-d-inline',
  'inline-block': 'drac-d-inline-block',
  'inline-flex': 'drac-d-inline-flex',
  'inline-grid': 'drac-d-inline-grid',
  'inline-table': 'drac-d-inline-table'
}

export const widths = {
  auto: 'drac-w-auto',
  none: 'drac-w-none',
  full: 'drac-w-full',
  xxs: 'drac-w-xxs',
  xs: 'drac-w-xs',
  sm: 'drac-w-sm',
  md: 'drac-w-md',
  lg: 'drac-w-lg',
  xl: 'drac-w-xl',
  '2xl': 'drac-w-2xl',
  '3xl': 'drac-w-3xl',
  '4xl': 'drac-w-4xl',
  '5xl': 'drac-w-5xl',
  '6xl': 'drac-w-6xl',
  '7xl': 'drac-w-7xl',
  '8xl': 'drac-w-8xl'
}

export const heights = mapValues(widths, (clz) => clz.replace('-w-', '-h-'))

/**
 * Box Props
 */
export type BoxProps<K extends keyof Element = 'div'> = {
  /** The background color. */
  color?: keyof typeof backgroundColors

  /** The display of the element. */
  display?: keyof typeof displays

  /** The glow color. */
  glowColor?: keyof typeof glowColors

  /** The border color. */
  borderColor?: keyof typeof borderColors

  /** The border radius. */
  rounded?: keyof typeof roundedBorders

  /** The height of the element. */
  height?: keyof typeof heights

  /** The width of the element. */
  width?: keyof typeof widths

  /** The HTML element to be used */
  as?: K

  /** If the custom scrollbar is to be used and its color. */
  scrollbar?: keyof typeof scrollbarColors | boolean
} & AllHTMLAttributes<K> &
  PaddingMixin &
  MarginMixin

/**
 * Box is the most primitive component of Dracula UI.
 * Using Box allows for consumers of the components library to compose
 * more complex patterns, components, and UIs.
 *
 * Box includes built-in Color and Spacing properties that make building
 * complex components convenient and consistent.
 */
export function Box<T extends keyof Element>(props: BoxProps<T>) {
  const {
    color,
    display,
    height,
    width,
    glowColor,
    borderColor,
    rounded,
    as = 'div',
    scrollbar,
    ...htmlProps
  } = props

  const finalProps = {
    ...htmlProps,
    className: cx(
      `drac-box`,
      props.className,
      scrollbar &&
        scrollbarColors[typeof scrollbar === 'boolean' ? 'purple' : scrollbar],

      height && heights[height],
      width && widths[width],
      color && backgroundColors[color],
      display && displays[display],
      glowColor && glowColors[glowColor],
      borderColor && borderColors[borderColor],
      rounded && roundedBorders[rounded],
      ...paddingMixin(props),
      ...marginMixin(props)
    )
  }

  return React.createElement(as, cleanProps(finalProps), props.children)
}

Box.displayName = 'Box'
