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

export const hoverColors = mapValues(textColors, (classname) => {
  return `${classname}--hover`
})

/** Anchor Props */
export interface AnchorProps
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
  hoverColor?: keyof typeof hoverColors
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
export const Anchor = (props: AnchorProps) => {
  const finalProps = {
    ...props,

    className: cx(
      `drac-anchor`,
      `drac-text`,
      props.className,
      textSizes[props.size ?? 'medium'],
      textWeights[props.weight ?? 'normal'],
      textColors[props.color ?? 'white'],
      hoverColors[props.hoverColor ?? 'purple'],
      ...paddingMixin(props),
      ...marginMixin(props)
    )
  }

  return React.createElement('a', finalProps, props.children)
}

Anchor.displayName = 'Anchor'
