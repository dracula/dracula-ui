import cx from 'classnames/dedupe'
import React, { HTMLAttributes } from 'react'
import { ColorMap } from '../../base/colors'
import {
  cleanProps,
  marginMixin,
  MarginMixin,
  paddingMixin,
  PaddingMixin
} from '../../base/spacing'

export const listColors: Partial<ColorMap> = {
  white: 'drac-list-white',
  cyan: 'drac-list-cyan',
  green: 'drac-list-green',
  orange: 'drac-list-orange',
  pink: 'drac-list-pink',
  purple: 'drac-list-purple',
  red: 'drac-list-red',
  yellow: 'drac-list-yellow'
}

export const listVariants = {
  unordered: 'drac-list-unordered',
  ordered: 'drac-list-ordered',
  none: 'drac-list-none'
}

/**
 * List Props
 */
export interface ListProps
  extends HTMLAttributes<HTMLUListElement>,
    PaddingMixin,
    MarginMixin {
  /** The Dracula UI color for the List. */
  color?: keyof typeof listColors
  /**
   * The variation to be used for the List element.
   * `unordered` -> Display list in dashes as an `<ul>`
   * `ordered` -> Deprecated and moved to OrderedList
   */
  variant?: keyof typeof listVariants
}

/**
 * Lists are used to display list items in an unordered way.
 */
export const List: React.FC<ListProps> = (props: ListProps) => {
  const { color, variant, ...htmlProps } = props

  if (variant === 'ordered')
    throw new Error(
      'the `ordered` prop has been deprecated. Please use the OrderedList component.'
    )

  const finalProps = cleanProps({
    ...htmlProps,
    className: cx(
      'drac-list',
      props.className,
      variant && listVariants[variant],
      color && listColors[color],
      ...paddingMixin(props),
      ...marginMixin(props)
    )
  })

  return <ul {...finalProps} />
}

List.displayName = 'List'
