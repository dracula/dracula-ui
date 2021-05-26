import cx from 'classnames/dedupe'
import first from 'lodash/first'
import last from 'lodash/last'
import React, { ImgHTMLAttributes } from 'react'
import { colors as backgroundColors } from '../../base/colors'
import {
  cleanProps,
  MarginMixin,
  marginMixin,
  PaddingMixin,
  paddingMixin
} from '../../base/spacing'
import { Text, textColors } from '../../components/Text/Text'

export const AvatarVariants = {
  normal: 'drac-avatar',
  subtle: 'drac-avatar-subtle'
}

export const AvatarBorderVariants = {
  normal: '',
  large: 'drac-avatar-lg-stroke',
  none: 'drac-avatar-no-border'
}

/** Avatar Props */
export interface AvatarProps
  extends ImgHTMLAttributes<HTMLSpanElement & HTMLImageElement>,
    PaddingMixin,
    MarginMixin {
  /**
   * The title or name to be used in the avatar.
   */
  title: string

  /**
   * The theme color for the avatar.
   * This property controls the border and glow colors for the component.
   */
  color?: keyof typeof backgroundColors

  /**
   * The variant property allows for consumers to choose from
   * a regular avatar, or a subtle variation.
   */
  variant?: keyof typeof AvatarVariants

  /**
   * Allows for controlling the border of the avatar.
   * `large` -> to use a thicker border.
   * `none` -> hides the border.
   */
  borderVariant?: keyof typeof AvatarBorderVariants

  /**
   * Sets the source for the profile picture.
   */
  src?: string
}

/**
 * The Avatar component is used to represent a user.
 *
 * It displays a profile picture, or falls back to the user's initials
 * if a profile pic is not provided.
 */
export const Avatar = (props: AvatarProps) => {
  const { color, variant, borderVariant, src, title, ...htmlProps } = props

  const backgroundClass = `${backgroundColors[color ?? 'green']}-transparent`

  const classes = cx(
    'drac-avatar',
    props.className,
    backgroundClass,
    textColors[color ?? 'green'],
    AvatarVariants[variant ?? 'normal'],
    AvatarBorderVariants[borderVariant ?? 'normal'],
    ...paddingMixin(props),
    ...marginMixin(props)
  )
  const names = props.title.split(' ')

  const f = first(names)?.slice(0, 1)
  const l = last(names)?.slice(0, 1)

  const style: React.HTMLAttributes<HTMLSpanElement>['style'] = {
    ...props.style
  }

  return (
    <span className={classes} style={style} {...cleanProps(htmlProps)}>
      {props.src && (
        <span
          className={cx('drac-avatar-background')}
          style={{
            backgroundImage: `url('${props.src}')`
          }}
        />
      )}
      {!props.src && (
        <Text color={props.color ?? 'white'}>
          {f}
          {l}
        </Text>
      )}
    </span>
  )
}

Avatar.displayName = 'Avatar'
