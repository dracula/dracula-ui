import cx from 'classnames/dedupe'
import React from 'react'
import { cleanProps, marginMixin, paddingMixin } from '../../base/spacing'
import {
  textColors,
  TextProps,
  textSizes,
  lineHeights,
  textWeights
} from '../Text/Text'

/**
 * Paragraph is a semantic component used for blocks of text with
 * semantic meaning.
 *
 * Paragraph accepts all the same customization options as Text.
 */
export const Paragraph: React.FC<TextProps> = (props: TextProps) => {
  const { size, weight, lineHeight, color, ...htmlProps } = props

  const finalProps = {
    ...htmlProps,

    className: cx(
      `drac-text`,
      props.className,
      textSizes[size ?? 'medium'],
      textWeights[weight ?? 'normal'],
      lineHeights[lineHeight ?? 'normal'],
      textColors[color ?? 'white'],
      ...paddingMixin(props),
      ...marginMixin(props)
    )
  }

  return <p {...cleanProps(finalProps)}>{props.children}</p>
}
