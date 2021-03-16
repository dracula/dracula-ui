import React, { HTMLAttributes } from 'react'
import { colors as backgroundColors } from '../../base/colors'
import { Text, textColors } from '../../components/Text/Text'
import cx from 'classnames/dedupe'
import {
  MarginMixin,
  marginMixin,
  PaddingMixin,
  paddingMixin
} from '../../base/spacing'

const variants = {
  normal: 'drac-badge',
  subtle: 'drac-badge-subtle',
  outline: 'drac-badge-outline'
}

/**
 * Badge Props
 */
export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    PaddingMixin,
    MarginMixin {
  /**
   * The theme variation color for a badge.
   */
  themeColor?: keyof typeof backgroundColors

  /**
   * The variants for the Badge components.
   * `normal` -> Default solid badge.
   * `subtle` -> Subtler background, highlights the text.
   * `outline` -> No background color, just borders and text.
   */
  variant?: keyof typeof variants
}

/**
 * Badges are used to denote status or to highlight specific
 * information.
 */
export const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
  const isOutline = props.variant === 'outline'
  const isSubtle = props.variant === 'subtle'
  const overrideTextColor = isOutline || isSubtle

  const textColorClass = overrideTextColor
    ? textColors[props.themeColor ?? 'green']
    : undefined

  let backgroundClass = backgroundColors[props.themeColor ?? 'green']
  if (isSubtle) {
    backgroundClass = `${backgroundClass}-transparent`
  }

  const classes = cx(
    'drac-badge',
    props.className,
    backgroundClass,
    variants[props.variant ?? 'normal'],
    textColorClass,
    ...marginMixin(props),
    ...paddingMixin(props)
  )

  return (
    <span className={classes} {...props}>
      <Text color={overrideTextColor ? props.themeColor : undefined}>
        {props.children}
      </Text>
    </span>
  )
}

Badge.displayName = 'Badge'
