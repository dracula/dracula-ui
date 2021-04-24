import cx from 'classnames/dedupe'
import mapValues from 'lodash/mapValues'
import React, { AnchorHTMLAttributes } from 'react'
import {
  cleanProps,
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
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
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
export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  (props, ref) => {
    const { size, weight, color, hoverColor, ...htmlProps } = props

    const finalProps = cleanProps({
      ...htmlProps,
      className: cx(
        `drac-anchor`,
        `drac-text`,
        props.className,
        textSizes[size ?? 'md'],
        textWeights[weight ?? 'normal'],
        textColors[color ?? 'white'],
        hoverColors[hoverColor ?? 'purple'],
        ...paddingMixin(props),
        ...marginMixin(props)
      )
    })

    return (
      <a ref={ref} {...finalProps}>
        {props.children}
      </a>
    )
  }
)

Anchor.displayName = 'Anchor'
