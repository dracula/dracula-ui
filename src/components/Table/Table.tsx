import cx from 'classnames/dedupe'
import React, { HTMLAttributes } from 'react'
import { ColorMap } from '../../base/colors'
import {
  marginMixin,
  MarginMixin,
  paddingMixin,
  PaddingMixin
} from '../../base/spacing'

export const tableColors: Partial<ColorMap> = {
  white: 'drac-table-white',
  cyan: 'drac-table-cyan',
  green: 'drac-table-green',
  orange: 'drac-table-orange',
  pink: 'drac-table-pink',
  purple: 'drac-table-purple',
  red: 'drac-table-red',
  yellow: 'drac-table-yellow'
}

export const tableVariants = {
  normal: 'drac-table',
  striped: 'drac-table-striped'
}

/**
 * Table Props
 */
export interface TableProps
  extends HTMLAttributes<HTMLTableElement>,
  PaddingMixin,
  MarginMixin {
  /** The Dracula UI color for the Table. */
  color?: keyof typeof tableColors

  /**
   * The variation to be used for the Table element.
   * `normal` -> Regular Table component without background colors.
   * `striped` -> Changes the background color of each even row.
   */
  variant?: keyof typeof tableVariants
}

/**
 * Tables are used to display data in a tabular fashion.
 */
export const Table: React.FC<TableProps> = (props: TableProps) => {
  const finalProps = {
    ...props,
    className: cx(
      'drac-table',
      props.className,
      props.variant && tableVariants[props.variant],
      props.color && tableColors[props.color],
      ...paddingMixin(props),
      ...marginMixin(props)
    )
  }

  return <table {...finalProps} />
}

Table.displayName = 'Table'
