import React, { HTMLAttributes } from 'react'
import { mapValues } from 'lodash'
import cx from 'classnames/dedupe'
import { spacingClasses, SpacingPropType } from '../../base/spacing'
import { baseTextColors } from '../../base/colors'

export const textSizes = {
  large: 'drac-text-lg',
  medium: 'drac-text',
  small: 'drac-text-sm',
  xsmall: 'drac-text-xs'
}

export const textWeights = {
  normal: 'drac-text',
  semibold: 'drac-text-semibold',
  bold: 'drac-text-bold'
}

export const textColors = mapValues(baseTextColors, (className) => {
  return className.replace('-bg-', '-text-')
})

/** Text Props */
export interface TextProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'is'> {
  /**
   * Controls the size of the text based on pre-configured Dracula UI sizes.
   * Options: `xsmall`, `small`, `medium`, `large`
   */
  size?: keyof typeof textSizes

  /**
   * Controsl the weight of the text.
   * Options: `normal`, `semibold`, `bold`.
   */
  weight?: keyof typeof textWeights

  /**
   * Controls the color of the text
   */
  color?: keyof typeof textColors

  /**
   * Controls the spacing between the Text component and its parent and siblings.
   */
  spacing?: SpacingPropType

  is?: 'a' | 'span' | 'p'
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
export const Text = (props: TextProps) => {
  const finalProps = {
    ...props,

    className: cx(
      `drac-text`,
      textSizes[props.size ?? 'medium'],
      textWeights[props.weight ?? 'normal'],
      textColors[props.color ?? 'white'],
      spacingClasses(props.spacing)
    )
  }

  return React.createElement(
    finalProps.is ?? 'span',
    finalProps,
    props.children
  )
}

Text.displayName = 'Text'
