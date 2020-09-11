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

/** Le props */
export interface AvatarProps
  extends HTMLAttributes<HTMLSpanElement & HTMLImageElement> {
  /** The theme color */
  themeColor?: keyof typeof backgroundColors
  /** Variant yo */
  variant?: keyof typeof AvatarVariants
  /** Border yoo */
  borderVariant?: keyof typeof AvatarBorderVariants
  /** Le source */
  src?: string
  /** Titulo */
  title: string
}

/**
 * Le Avatar
 */
export const Avatar = (props: AvatarProps) => {
  const { themeColor, variant, borderVariant, src, title, ...htmlProps } = props

  const backgroundClass = `${
    backgroundColors[themeColor ?? 'green']
  }-transparent`

  const classes = cx(
    'drac-avatar',
    backgroundClass,
    TextColors[themeColor ?? 'green'],
    AvatarVariants[variant ?? 'normal'],
    AvatarBorderVariants[borderVariant ?? 'normal']
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
    <span className={classes} style={style} {...htmlProps}>
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
