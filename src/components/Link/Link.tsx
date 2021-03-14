import cx from 'classnames/dedupe'
import { mapValues } from 'lodash'
import React, { HTMLAttributes } from 'react'
import { spacingClasses, SpacingPropType } from '../../base/spacing'
import { textColors, textSizes, textWeights } from '../Text/Text'

export const linkHoverColors = mapValues(textColors, classname => {
  return `${classname}--hover`
})

/** Link Props */
export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  /**
   * Controls the size of the link based on pre-configured Dracula UI sizes.
   * Options: `xsmall`, `small`, `medium`, `large`
   */
  size?: keyof typeof textSizes

  /**
   * Controls the weight of the link.
   * Options: `normal`, `semibold`, `bold`.
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

  /**
   * Controls the spacing between the Link component and its parent and siblings.
   */
  spacing?: SpacingPropType
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
      textSizes[props.size ?? 'medium'],
      textWeights[props.weight ?? 'normal'],
      textColors[props.color ?? 'white'],
      linkHoverColors[props.hoverColor ?? 'white'],
      spacingClasses(props.spacing)
    )
  }

  return React.createElement(
    'a',
    finalProps,
    props.children
  )
}

Link.displayName = 'Link'
