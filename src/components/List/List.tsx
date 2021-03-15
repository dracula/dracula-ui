import cx from 'classnames/dedupe'
import React, { HTMLAttributes } from 'react'
import { ColorMap } from '../../base/colors'
import {
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
  extends HTMLAttributes<HTMLOListElement>,
    PaddingMixin,
    MarginMixin {
  /** The Dracula UI color for the List. */
  color: keyof typeof listColors

  /**
   * The variation to be used for the List element.
   * `unordered` -> Display list in dashes as an `<ul>`
   * `ordered` -> Display list in numbers as an `<ol>`
   */
  variant?: keyof typeof listVariants
}

/**
 * Lists are horizontal lines used to separate semantic blocks of
 * content or UI patterns.
 */
export const List: React.FC<ListProps> = (props: ListProps) => {
  const finalProps = {
    ...props,
    className: cx(
      'drac-list',
      props.variant && listVariants[props.variant],
      props.color && listColors[props.color],
      ...paddingMixin(props),
      ...marginMixin(props)
    )
  }

  if (props.variant === 'unordered') {
    return <ul {...finalProps} />
  }

  return <ol {...finalProps} />
}

List.displayName = 'List'
