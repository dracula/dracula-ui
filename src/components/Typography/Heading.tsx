import cx from 'classnames'
import { mapValues } from 'lodash'
import React, { HTMLAttributes } from 'react'
import { colors } from '@/base/colors'
import { spacingClasses, SpacingPropType } from '@/base/spacing'

export const HeadingSizes = {
  'heading-1': 'drac-heading-1',
  'heading-2': 'drac-heading-2',
  'heading-3': 'drac-heading-3',
  'heading-4': 'drac-heading-4'
}

export const HeadingColors = mapValues(colors, (className) => {
  return className.replace('-bg-', '-text-')
})

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: keyof typeof HeadingSizes
  color?: keyof typeof HeadingColors
  spacing?: SpacingPropType
}

export const Heading: React.FC<HeadingProps> = (props) => {
  const tag = {
    'heading-1': 'h1',
    'heading-2': 'h2',
    'heading-3': 'h3',
    'heading-4': 'h4'
  }

  const size = tag[props.size ?? 'heading-1']
  const finalProps = {
    ...props,
    className: cx(
      `drac-heading`,
      HeadingSizes[props.size ?? 'heading-1'],
      props.color && HeadingColors[props.color],
      ...spacingClasses(props.spacing ?? 'none')
    )
  }

  return React.createElement(size, finalProps, props.children)
}

Heading.displayName = 'Heading'
