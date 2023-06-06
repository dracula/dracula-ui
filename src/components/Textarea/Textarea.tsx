import cx from 'classnames/dedupe'
import React, { TextareaHTMLAttributes } from 'react'
import { BaseColorMap } from '../../base/colors'
import {
  cleanProps,
  marginMixin,
  MarginMixin,
  paddingMixin,
  PaddingMixin
} from '../../base/spacing'

export const textareaVariants = {
  normal: 'drac-textarea',
  outline: 'drac-textarea-outline'
}

export const textareaSizes = {
  lg: 'drac-textarea-lg',
  md: 'drac-textarea',
  sm: 'drac-textarea-sm'
}

export const textareaBorderSizes = {
  lg: 'drac-textarea-border-lg',
  md: 'drac-textarea-border-md',
  sm: 'drac-textarea-border-sm'
}

export const textareaColors: BaseColorMap & { white: string } = {
  white: 'drac-textarea-white drac-text-white',
  cyan: 'drac-textarea-cyandrac-text-cyan',
  green: 'drac-textarea-green drac-text-green',
  orange: 'drac-textarea-orange drac-text-orange',
  pink: 'drac-textarea-pink drac-text-pink',
  purple: 'drac-textarea-purple drac-text-purple',
  red: 'drac-textarea-red drac-text-red',
  yellow: 'drac-textarea-yellow drac-text-yellow'
}

export interface TextareaProps 
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>, 
  PaddingMixin, 
  MarginMixin {
  
  color?: keyof typeof textareaColors

  size?: keyof typeof textareaSizes | number

  borderSize?: keyof typeof textareaBorderSizes

  variant?: keyof typeof textareaVariants
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { color, size, borderSize, variant, ...htmlProps} = props

    const finalProps: Record<string, any> = {
      ...htmlProps,
	  className: cx(
	    `drac-textarea`,
	    props.className,
	    variant && textareaVariants[variant],
	    size && typeof size === 'string' && textareaSizes[size],
	    borderSize && textareaBorderSizes[borderSize],
	    color && textareaColors[color],
	    ...paddingMixin(props),
	    ...marginMixin(props)
	  )
    }

    if (size && typeof size === 'number') {
	  finalProps[size] = size
    }

    return <textarea ref={ref} {...cleanProps(finalProps)}></textarea>
  }
)

Textarea.displayName = 'Textarea'
