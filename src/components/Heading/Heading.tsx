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

export const headingSizes = {
  '2xl': 'drac-heading-2xl',
  xl: 'drac-heading-xl',
  lg: 'drac-heading-lg',
  md: 'drac-heading',
  sm: 'drac-heading-sm',
  xs: 'drac-heading-xs'
}

export const headingColors = mapValues(colors, (className) => {
  return className.replace('-bg-', '-text-')
})

/** Heading Props */
export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    MarginMixin,
    PaddingMixin {
  /**
   * The size and type of Heading to be used.
   * Denotes hierarchy.
   */
  size?: keyof typeof headingSizes

  /**
   * The Dracula UI color to be applied to the Heading.
   */
  color?: keyof typeof headingColors

  /** The HTML element to be used */
  as?: keyof HTMLElementTagNameMap
}

/**
 * Heading is used to display headlines and other forms of hierarchical Text.
 *
 * Headings are similar to the base Text component, but restricted to certain
 * sizes and font weight.
 */
export const Heading: React.FC<HeadingProps> = (props: HeadingProps) => {
  const { size, color, as, ...htmlProps } = props

  const finalProps = {
    ...htmlProps,
    className: cx(
      `drac-heading`,
      props.className,
      headingSizes[size ?? 'xl'],
      headingColors[color ?? 'white'],
      ...paddingMixin(props),
      ...marginMixin(props)
    )
  }

  return React.createElement(as ?? 'h2', cleanProps(finalProps), props.children)
}

Heading.displayName = 'Heading'
