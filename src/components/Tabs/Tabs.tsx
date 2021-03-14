import cx from 'classnames/dedupe'
import React, { HTMLAttributes } from 'react'
import { ColorMap } from '../../base/colors'
import {
  marginClasses,
  MarginPropType,
  spacingClasses,
  SpacingPropType
} from '../../base/spacing'

export const tabsColors: Partial<ColorMap> = {
  white: 'drac-tabs-white',
  cyan: 'drac-tabs-cyan',
  green: 'drac-tabs-green',
  orange: 'drac-tabs-orange',
  pink: 'drac-tabs-pink',
  purple: 'drac-tabs-purple',
  red: 'drac-tabs-red',
  yellow: 'drac-tabs-yellow'
}

/**
 * Tabs Props
 */
export interface TabsProps extends HTMLAttributes<HTMLUListElement> {
  /** The Dracula UI color for the Tabs. */
  color: keyof typeof tabsColors

  /** Dracula UI standard spacing properties. */
  spacing?: SpacingPropType

  /** Dracula UI standard margin properties. */
  margin?: MarginPropType
}

/**
 * Tabs are horizontal navigation elements used to display
 * content within the same page.
 */
export const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
  const finalProps = {
    ...props,
    className: cx(
      'drac-tabs',
      props.color && tabsColors[props.color],
      ...spacingClasses(props.spacing),
      ...marginClasses(props.margin)
    )
  }

  return <ul {...finalProps} />
}

Tabs.displayName = 'Tabs'
