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
 * Anchor is an abstraction/style that can/is applied to HTML anchor elements.
 *
 * Consumers of this component can control, the color, size,
 * weight, and spacing of the Anchor.
 *
 * Use this component to create text or element based anchors around other HTML tags or React Components.
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
