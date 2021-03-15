import cx from 'classnames/dedupe'
import React from 'react'
import { marginMixin, paddingMixin } from '../../base/spacing'
import { textColors, TextProps, textSizes, textWeights } from '../Text/Text'

/**
 * Paragraph is a semantic component used for blocks of text with
 * semantic meaning.
 *
 * Paragraph accepts all the same customization options as Text.
 */
export const Paragraph: React.FC<TextProps> = (props: TextProps) => {
  const finalProps = {
    ...props,

    className: cx(
      `drac-text`,
      textSizes[props.size ?? 'medium'],
      textWeights[props.weight ?? 'normal'],
      textColors[props.color ?? 'white'],
      ...paddingMixin(props),
      ...marginMixin(props)
    )
  }

  return <p {...finalProps}>{props.children}</p>
}
