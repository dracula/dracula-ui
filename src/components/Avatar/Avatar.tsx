import cx from 'classnames'
import { first, last } from 'lodash'
import React, { HTMLAttributes } from 'react'
import { colors as backgroundColors } from '@/base/colors'
import { Text, TextColors } from '@/components/Typography/Text'

export const AvatarVariants = {
  normal: 'drac-avatar',
  subtle: 'drac-avatar-subtle'
}

export const AvatarBorderVariants = {
  normal: '',
  large: 'drac-avatar-lg-stroke',
  none: 'drac-avatar-no-border'
}

export interface AvatarProps
  extends HTMLAttributes<HTMLSpanElement & HTMLImageElement> {
  themeColor?: keyof typeof backgroundColors
  variant?: keyof typeof AvatarVariants
  borderVariant?: keyof typeof AvatarBorderVariants
  src?: string
  title: string
}

export const Avatar: React.FC<AvatarProps> = props => {
  const backgroundClass = `${
    backgroundColors[props.themeColor ?? 'green']
  }-transparent`

  const classes = cx(
    'drac-avatar',
    backgroundClass,
    TextColors[props.themeColor ?? 'green'],
    AvatarVariants[props.variant ?? 'normal'],
    AvatarBorderVariants[props.borderVariant ?? 'normal']
  )
  const names = props.title.split(' ')

  const f = first(names)?.slice(0, 1)
  const l = last(names)?.slice(0, 1)

  const style: React.HTMLAttributes<HTMLSpanElement>['style'] = {
    ...props.style
  }

  if (props.src) {
    style.backgroundImage = `url('${props.src}')`
  }

  return (
    <span className={classes} style={style} {...props}>
      {!props.src && (
        <Text color={props.themeColor ?? 'white'}>
          {f}
          {l}
        </Text>
      )}
    </span>
  )
}

Avatar.displayName = 'Avatar'
