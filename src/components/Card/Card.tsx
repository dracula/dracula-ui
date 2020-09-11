import React from 'react'
import { Box, BoxProps } from '@/components/Box/Box'
import { borderColors } from '@/base/colors'
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

export interface CardProps extends BoxProps {
  orientation?: CardOrientationProps
  variant?: CardVariantProps
}

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
