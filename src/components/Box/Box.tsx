import React, { HTMLAttributes } from 'react'
import cx from 'classnames'
import { spacingClasses, SpacingPropType } from '@/base/spacing'
import { colors } from '@/base/colors'

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  color?: keyof typeof colors
  spacing?: SpacingPropType
}

export const Box: React.FC<BoxProps> = (props) => {
  const finalProps = {
    ...props,
    className: cx(
      `drac-box`,
      props.color && colors[props.color],
      ...spacingClasses(props.spacing),
      props.className
    )
  }

  return <div {...finalProps} />
}

Box.displayName = 'Box'
