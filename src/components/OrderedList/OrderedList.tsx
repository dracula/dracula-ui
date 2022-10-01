import cx from 'classnames/dedupe'
import React, { OlHTMLAttributes } from 'react'
import { ColorMap } from '../../base/colors'
import {
  cleanProps,
  marginMixin,
  MarginMixin,
  paddingMixin,
  PaddingMixin
} from '../../base/spacing'

export const orderedListColors: Partial<ColorMap> = {
  white: 'drac-list-white',
  cyan: 'drac-list-cyan',
  green: 'drac-list-green',
  orange: 'drac-list-orange',
  pink: 'drac-list-pink',
  purple: 'drac-list-purple',
  red: 'drac-list-red',
  yellow: 'drac-list-yellow'
}

const orderedListTypes = {
  1: 'drac-list-ordered-decimal',
  a: 'drac-list-ordered-lower-alpha',
  A: 'drac-list-ordered-lower-alpha',
  i: 'drac-list-ordered-lower-roman',
  I: 'drac-list-ordered-lower-roman'
}

/**
 * OrderedList Props
 */
export interface OrderedListProps
  extends OlHTMLAttributes<HTMLOListElement>,
    PaddingMixin,
    MarginMixin {
  /** The Dracula UI color for the Ordered List. */
  color?: keyof typeof orderedListColors
  /** The numbering type of the Ordered List, same as a regular `<ol>` element. */
  type?: OlHTMLAttributes<HTMLOListElement>['type']
}

/**
 * Ordered Lists are used to display list items in an ordered way.
 */
export const OrderedList: React.FC<OrderedListProps> = (props) => {
  const { color, type, ...htmlProps } = props

  const finalProps = cleanProps({
    ...htmlProps,
    type,
    className: cx(
      'drac-list drac-list-ordered',
      type && orderedListTypes[type],
      props.className,
      color && orderedListColors[color],
      ...paddingMixin(props),
      ...marginMixin(props)
    )
  })

  return <ol {...finalProps} />
}

OrderedList.displayName = 'OrderedList'
