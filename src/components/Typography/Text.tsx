import React, { HTMLAttributes } from 'react'
import { mapValues } from 'lodash'
import cx from 'classnames'
import { spacingClasses, SpacingPropType } from '@/base/spacing'
import { textColors } from '@/base/colors'

export const TextSizes = {
  large: 'drac-text-lg',
  medium: 'drac-text-md',
  normal: 'drac-text',
  small: 'drac-text-sm'
}

export const TextWeights = {
  normal: 'drac-text',
  semibold: 'drac-text-semibold',
  bold: 'drac-text-bold'
}

export const TextColors = mapValues(textColors, (className) => {
  return className.replace('-bg-', '-text-')
})

/** Text Props */
export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Controls the size of the text based on pre-configured Dracula UI sizes.
   * Options: `normal`, `small`, `medium`, `large`
   */
  size?: keyof typeof TextSizes

  /**
   * Controsl the weight of the text.
   * Options: `normal`, `semibold`, `bold`.
   */
  weight?: keyof typeof TextWeights

  /**
   * Controls the color of the text
   */
  color?: keyof typeof TextColors

  /**
   * Controls the spacing between the Text components and its parent and siblings.
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
export const Text = (props: TextProps) => {
  const finalProps = {
    ...props,

    className: cx(
      `drac-text`,
      TextSizes[props.size ?? 'normal'],
      TextWeights[props.weight ?? 'normal'],
      TextColors[props.color ?? 'black'],
      spacingClasses(props.spacing)
    )
  }

  return <span {...finalProps}>{props.children}</span>
}

/**
 * Paragraph is a semantic component used for blocks of text with
 * semantic meaning.
 *
 * Paragraph accepts all the same customization options as Text.
 */
export const Paragraph: React.FC<TextProps> = (props: TextProps) => {
  const finalProps = {
    ...props,

    className: cx(
      `drac-text`,
      TextSizes[props.size ?? 'normal'],
      TextWeights[props.weight ?? 'normal'],
      TextColors[props.color ?? 'black'],
      spacingClasses(props.spacing ?? 'smallY')
    )
  }

  return <p {...finalProps}>{props.children}</p>
}

Text.displayName = 'Text'
