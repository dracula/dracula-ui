import cx from 'classnames/dedupe'
import React, { AllHTMLAttributes } from 'react'
import { colors } from '../../base/colors'
import { spacingClasses, SpacingPropType } from '../../base/spacing'

type Element = HTMLElementTagNameMap

/**
 * Box Props
 */
export interface BoxProps<K extends keyof Element = 'div'>
  extends AllHTMLAttributes<K> {
  /** The background color. */
  color?: keyof typeof colors

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
      ...spacingClasses(props.spacing),
      props.className
    )
  }

  const as = finalProps.as ?? 'div'
  return React.createElement(as, finalProps, props.children)
}

Box.displayName = 'Box'
