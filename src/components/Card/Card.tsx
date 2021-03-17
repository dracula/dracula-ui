import cx from 'classnames/dedupe'
import React from 'react'
import { borderColors, colors, glowColors } from '../../base/colors'
import { Box, BoxProps } from '../../components/Box/Box'

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
    props.variant && cardVariants[props.variant],

    // apply border color based on theme color
    // @ts-ignore TODO: make sure border and background colors match
    props.color && props.variant !== 'subtle' && colors[props.color],
    // @ts-ignore TODO: make sure border and background colors match
    props.color && props.variant === 'subtle' && borderColors[props.color],
    props.glowColor && glowColors[props.glowColor]
  )

  return (
    <Box {...props} className={classNames}>
      {props.children}
    </Box>
  )
}

Card.displayName = 'Card'
