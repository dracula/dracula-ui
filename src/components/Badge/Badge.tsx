import cx from 'classnames/dedupe'
import React, { AllHTMLAttributes } from 'react'
import { backgroundColors } from '../../base/colors'
import {
  cleanProps,
  MarginMixin,
  marginMixin,
  PaddingMixin,
  paddingMixin
} from '../../base/spacing'
import { Text, textColors } from '../../components/Text/Text'

const variants = {
  normal: 'drac-badge',
  subtle: 'drac-badge-subtle',
  outline: 'drac-badge-outline'
}

/**
 * Badge Props
 */
export type BadgeProps = {
  /**
   * The theme variation color for a badge.
   */
  color?: keyof typeof backgroundColors

  /**
   * The variants for the Badge components.
   * `normal` -> Default solid badge.
   * `subtle` -> Subtler background, highlights the text.
   * `outline` -> No background color, just borders and text.
   */
  variant?: keyof typeof variants
} & AllHTMLAttributes<HTMLSpanElement> &
  PaddingMixin &
  MarginMixin

/**
 * Badges are used to denote status or to highlight specific
 * information.
 */
export const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
  const { variant, color = 'purple', children, ...htmlProps } = props

  const isOutline = variant === 'outline'
  const isSubtle = variant === 'subtle'
  const overrideTextColor = isOutline || isSubtle

  const textColorClass =
    overrideTextColor && color !== 'animated' ? textColors[color] : undefined

  let backgroundClass = backgroundColors[color]
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
    <span className={classes} {...cleanProps(htmlProps)}>
      <Text
        color={
          overrideTextColor && props.color !== 'animated'
            ? props.color
            : 'black'
        }
      >
        {children}
      </Text>
    </span>
  )
}

Badge.displayName = 'Badge'
