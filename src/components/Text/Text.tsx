import cx from 'classnames/dedupe'
import mapValues from 'lodash/mapValues'
import React, { HTMLAttributes } from 'react'
import { colors } from '../../base/colors'
import {
  cleanProps,
  marginMixin,
  MarginMixin,
  paddingMixin,
  PaddingMixin
} from '../../base/spacing'

export const textSizes = {
  md: 'drac-text',
  lg: 'drac-text-lg',
  sm: 'drac-text-sm',
  xs: 'drac-text-xs'
}

export const textWeights = {
  normal: 'drac-text',
  semibold: 'drac-text-semibold',
  bold: 'drac-text-bold'
}

export const lineHeights = {
  md: 'drac-line-height',
  xl: 'drac-line-height-xl',
  lg: 'drac-line-height-lg',
  sm: 'drac-line-height-sm',
  xs: 'drac-line-height-xs'
}

export const textColors = mapValues(colors, (className) => {
  return className.replace('-bg-', '-text-')
})

/** Text Props */
export interface TextProps
  extends HTMLAttributes<HTMLSpanElement>,
  PaddingMixin,
  MarginMixin {
  /**
   * Controls the size of the text based on pre-configured Dracula UI sizes.
   */
  size?: keyof typeof textSizes

  /**
   * Controls the weight of the text.
   */
  weight?: keyof typeof textWeights

  /**
   * Controls the line height of a text.
   */
  lineHeight?: keyof typeof lineHeights

  /**
   * Controls the color of the text
   */
  color?: keyof typeof textColors

  /** The HTML element to be used */
  as?: 'a' | 'span' | 'p'
}

/**
 * Text is the base component for any sort of text.
 *
 * Consumers of this component can control, the color, size,
 * weight, and spacing of Text.
 *
 * Use this component for generic, and non-hierarchical text that is
 * to be displayed on a page, or as part of other complex components
 * or UI patterns.
 */
export const Text = (props: TextProps) => {
  const { size, weight, lineHeight, as, color, ...htmlProps } = props

  const finalProps = {
    ...htmlProps,
    className: cx(
      `drac-text`,
      props.className,
      textSizes[size ?? 'md'],
      textWeights[weight ?? 'normal'],
      lineHeights[lineHeight ?? 'md'],
      textColors[color ?? 'white'],
      ...paddingMixin(props),
      ...marginMixin(props)
    )
  }

  return React.createElement(
    as ?? 'span',
    cleanProps(finalProps),
    props.children
  )
}

Text.displayName = 'Text'
