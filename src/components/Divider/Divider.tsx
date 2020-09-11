import { borderColors } from '@/base/colors'
import React, { HTMLAttributes } from 'react'

export const dividerColors = borderColors

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  color: keyof typeof dividerColors
}

export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  const finalProps = {
    ...props,
    className: `drac-divider ${dividerColors[props.color]}`
  }

  return <hr {...finalProps} />
}

Divider.displayName = 'Divider'
