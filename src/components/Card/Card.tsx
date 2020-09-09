import React from 'react'
import { Box, BoxProps } from '../Color/Box'
import cx from 'classnames'

export const cardOrientations = {
  normal: '',
  portrait: 'drac-card-portrait'
}

export type CardOrientationProps = keyof typeof cardOrientations
export interface CardProps extends BoxProps {
  orientation?: CardOrientationProps
}

export const Card: React.FC<CardProps> = props => {
  const classNames = cx(
    'drac-card',
    props.className,
    props.orientation && cardOrientations[props.orientation]
  )

  return (
    <Box {...props} className={classNames}>
      {props.children}
    </Box>
  )
}
