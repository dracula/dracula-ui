import { borderColors } from '@/base/colors'
import React, { HTMLAttributes } from 'react'

export const dividerColors = borderColors

/**
 * Divider Props
 */
export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** The Dracula UI color for the Divider. */
  color: keyof typeof dividerColors
}

/**
 * Dividers are horizontal lines used to separate semantic blocks of
 * content or UI patterns.
 */
export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  const finalProps = {
    ...props,
    className: `drac-divider ${dividerColors[props.color]}`
  }

  return <hr {...finalProps} />
}

Divider.displayName = 'Divider'
