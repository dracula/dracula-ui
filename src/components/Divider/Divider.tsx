import classNamesDedupe from 'classnames/dedupe'
import React, { HTMLAttributes } from 'react'
import { borderColors } from '../../base/colors'
import {
  cleanProps,
  MarginMixin,
  marginMixin,
  PaddingMixin,
  paddingMixin
} from '../../base/spacing'

export const dividerColors = borderColors

/**
 * Divider Props
 */
export interface DividerProps
  extends HTMLAttributes<HTMLDivElement>,
    PaddingMixin,
    MarginMixin {
  /** The Dracula UI color for the Divider. */
  color?: keyof typeof dividerColors
}

/**
 * Dividers are horizontal lines used to separate semantic blocks of
 * content or UI patterns.
 */
export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  const { color, ...htmlProps } = props

  const finalProps = {
    ...htmlProps,
    className: classNamesDedupe(
      `drac-divider`,
      props.className,
      color && dividerColors[color],
      ...paddingMixin(props),
      ...marginMixin(props)
    )
  }

  return <hr {...cleanProps(finalProps)} />
}

Divider.displayName = 'Divider'
