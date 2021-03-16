import cx from 'classnames/dedupe'
import React, { HTMLAttributes } from 'react'
import { ColorMap } from '../../base/colors'
import {
  MarginMixin,
  marginMixin,
  PaddingMixin,
  paddingMixin
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
export interface TabsProps
  extends HTMLAttributes<HTMLUListElement>,
    PaddingMixin,
    MarginMixin {
  /** The Dracula UI color for the Tabs. */
  color: keyof typeof tabsColors
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
      props.className,
      props.color && tabsColors[props.color],
      ...paddingMixin(props),
      ...marginMixin(props)
    )
  }

  return <ul {...finalProps} />
}

Tabs.displayName = 'Tabs'
