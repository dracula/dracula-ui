import cx from 'classnames/dedupe'
import { mapValues } from 'lodash'
import React, { HTMLAttributes } from 'react'
import {
  marginMixin,
  MarginMixin,
  paddingMixin,
  PaddingMixin
} from '../../base/spacing'
import { textColors, textSizes, textWeights } from '../Text/Text'

export const linkHoverColors = mapValues(textColors, (classname) => {
  return `${classname}--hover`
})

/** Link Props */
export interface LinkProps
  extends HTMLAttributes<HTMLAnchorElement>,
    PaddingMixin,
    MarginMixin {
  /**
   * The path to link this anchor to.
   */
  href?: string

  /**
   * Controls the size of the link based on pre-configured Dracula UI sizes.
   */
  size?: keyof typeof textSizes

  /**
   * Controls the weight of the link.
   */
  weight?: keyof typeof textWeights

  /**
   * Controls the color of the link
   */
  color?: keyof typeof textColors

  /**
   * Controls the color of the link on hover
   */
  hoverColor?: keyof typeof linkHoverColors
}

/**
 * Text is the base component for any sort of text.
 *
 * Consumers of this component can control, the color, size,
 * weight, and spacing of Text.
 *
 * Use this component for generic, and non-hierarchical text that is
 * to be displayed on a page, or as part of other complex components
 * or UI patterns
 */
export const Link = (props: LinkProps) => {
  const finalProps = {
    ...props,

    className: cx(
      `drac-link`,
      `drac-text`,
      props.className,
      textSizes[props.size ?? 'medium'],
      textWeights[props.weight ?? 'normal'],
      textColors[props.color ?? 'white'],
      linkHoverColors[props.hoverColor ?? 'purple'],
      ...paddingMixin(props),
      ...marginMixin(props)
    )
  }

  return React.createElement('a', finalProps, props.children)
}

Link.displayName = 'Link'
