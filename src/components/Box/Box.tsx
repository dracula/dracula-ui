import cx from 'classnames/dedupe'
import React, { AllHTMLAttributes } from 'react'
import {
  borderColors,
  colors,
  glowColors,
  scrollbarColors
} from '../../base/colors'

import {
  PaddingMixin,
  paddingMixin,
  marginMixin,
  MarginMixin,
  cleanProps
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

/**
 * Box Props
 */
export type BoxProps<K extends keyof Element = 'div'> = {
  /** The background color. */
  color?: keyof typeof colors

  /** The glow color. */
  glowColor?: keyof typeof glowColors

  /** The border color. */
  borderColor?: keyof typeof borderColors

  /** The border radius. */
  rounded?: keyof typeof roundedBorders

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
      scrollbar && scrollbarColors[typeof scrollbar === 'boolean' ? 'purple' : scrollbar],
      color && colors[color],
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
