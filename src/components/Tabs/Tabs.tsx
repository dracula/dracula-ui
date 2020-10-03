import { ColorMap } from '@/base/colors'
import React, { HTMLAttributes } from 'react'
import cx from 'classnames'

export const tabsColors: ColorMap = {
  black: 'drac-tabs-black',
  white: 'drac-tabs-white',
  cyan: 'drac-tabs-cyan',
  green: 'drac-tabs-green',
  orange: 'drac-tabs-orange',
  pink: 'drac-tabs-pink',
  purple: 'drac-tabs-purple',
  red: 'drac-tabs-red',
  yellow: 'drac-tabs-yellow',
  animated: '',
  cyanGreen: '',
  pinkPurple: '',
  purpleCyan: '',
  yellowPink: ''
}

/**
 * Tabs Props
 */
export interface TabsProps extends HTMLAttributes<HTMLUListElement> {
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
    className: cx('drac-tabs', props.color && tabsColors[props.color])
  }

  return <ul {...finalProps} />
}

Tabs.displayName = 'Tabs'
