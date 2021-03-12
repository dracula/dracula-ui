import cx from 'classnames/dedupe'
import React, { AllHTMLAttributes } from 'react'
import { colors } from '../../base/colors'
import { spacingClasses, SpacingPropType } from '../../base/spacing'

type Element = HTMLElementTagNameMap

export const roundedBorders = {
  none: 'drac-rounded-none',
  sm: 'drac-rounded-sm',
  base: 'drac-rounded',
  lg: 'drac-rounded-lg',
  xl: 'drac-rounded-xl',
  '2xl': 'drac-rounded-2xl',
  '3xl': 'drac-rounded-3xl',
  full: 'drac-rounded-full',
}

/**
 * Box Props
 */
export interface BoxProps<K extends keyof Element = 'div'>
  extends AllHTMLAttributes<K> {
  /** The background color. */
  color?: keyof typeof colors

  /** The border radius. */
  rounded?: keyof typeof roundedBorders

  /** Dracula UI standard spacing properties. */
  spacing?: SpacingPropType

  /** The HTML element to be used */
  as?: K
}

/**
 * Box is the most primitive component of Dracula UI.
 * Using Box allows for consumers of the components library to compose
 * more complex patterns, components, and UIs.
 *
 * Box includes built-in Color and Spacing properties that make building
 * complex components convenient and consistent.
 */
export function Box<T extends keyof Element>(props: BoxProps<T>) {
  const finalProps = {
    ...props,
    className: cx(
      `drac-box`,
      props.color && colors[props.color],
      props.rounded && roundedBorders[props.rounded],
      ...spacingClasses(props.spacing),
      props.className
    )
  }

  const as = finalProps.as ?? 'div'
  return React.createElement(as, finalProps, props.children)
}

Box.displayName = 'Box'
