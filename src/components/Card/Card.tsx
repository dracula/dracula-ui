import React from 'react'
import { Box, BoxProps } from '../Color/Box'
import cx from 'classnames'

export interface CardProps extends BoxProps {}

export const Card: React.FC<CardProps> = props => {
  const classNames = cx('drac-card', props.className)

  return (
    <Box {...props} className={classNames}>
      {props.children}
    </Box>
  )
}
