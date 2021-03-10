import React from 'react'
import { Box, BoxProps } from '../../components/Box/Box'
import { borderColors } from '../../base/colors'
import cx from 'classnames'

export const cardOrientations = {
  normal: '',
  portrait: 'drac-card-portrait'
}
export type CardOrientationProps = keyof typeof cardOrientations

export const cardVariants = {
  normal: '',
  subtle: 'drac-card-subtle'
}
export type CardVariantProps = keyof typeof cardVariants

/** Card Props */
export interface CardProps extends BoxProps {
  /**
   * Shortcut property that makes it convenient to orient a card vertically or horizontally.
   * `normal` -> Orients the Card horizontally in landscape format.
   * `portrait` -> Orients the Card vertically.
   */
  orientation?: CardOrientationProps

  /**
   * The Card display variant.
   * `normal` -> Applies the chosen background color with dark text.
   * `subtle` -> Inverts the theme color, and adds a slight glow to the Card. Use this when you don't want all your cards to stand out.
   */
  variant?: CardVariantProps
}

/**
 * Card is a high level Pattern Component use to group
 * related or hierarchical information.
 */
export const Card: React.FC<CardProps> = (props: CardProps) => {
  const classNames = cx(
    'drac-card',
    props.className,
    props.orientation && cardOrientations[props.orientation],
    props.variant && cardVariants[props.variant],
    // apply border color based on theme color
    props.color && props.variant && borderColors[props.color]
  )

  return (
    <Box {...props} className={classNames}>
      {props.children}
    </Box>
  )
}

Card.displayName = 'Card'
