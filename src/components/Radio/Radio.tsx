import classNamesDedupe from 'classnames/dedupe'
import React, { HTMLAttributes } from 'react'
import { ColorMap } from '../../base/colors'
import {
  cleanProps,
  marginMixin,
  MarginMixin,
  paddingMixin,
  PaddingMixin
} from '../../base/spacing'

export const radioColors: Partial<ColorMap> = {
  white: 'drac-radio-white',
  cyan: 'drac-radio-cyan',
  green: 'drac-radio-green',
  orange: 'drac-radio-orange',
  pink: 'drac-radio-pink',
  purple: 'drac-radio-purple',
  red: 'drac-radio-red',
  yellow: 'drac-radio-yellow'
}

/** Radio Props */
export interface RadioProps
  extends HTMLAttributes<HTMLInputElement>,
    PaddingMixin,
    MarginMixin {
  /** The Dracula UI theme color for the radio button. */
  color: keyof typeof radioColors

  /** The name of the radio. Mirrors the name HTML attribute. */
  name?: string

  /** A disabled radio is unusable and un-clickable. */
  disabled?: boolean
}

/**
 * Radio is a styled HTML Input of type radio.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS in order to keep Radios accessible.
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref) => {
    const { color, name, disabled, ...htmlProps } = props

    const finalProps = {
      name,
      disabled,
      ...htmlProps,
      className: classNamesDedupe(
        `drac-radio`,
        props.className,
        radioColors[color],
        ...paddingMixin(props),
        ...marginMixin(props)
      )
    }

    return <input type="radio" ref={ref} {...cleanProps(finalProps)} />
  }
)

Radio.displayName = 'Radio'
