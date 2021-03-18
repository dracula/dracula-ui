import React, { HTMLAttributes } from 'react';
import { ColorMap } from '../../base/colors';
import { MarginMixin, PaddingMixin } from '../../base/spacing';
export declare const tableColors: Partial<ColorMap>;
export declare const tableVariants: {
    normal: string;
    striped: string;
};
/**
 * Table Props
 */
export interface TableProps extends HTMLAttributes<HTMLTableElement>, PaddingMixin, MarginMixin {
    /** The Dracula UI color for the Table. */
    color?: keyof typeof tableColors;
    /**
     * The variation to be used for the Table element.
     * `normal` -> Regular Table component without background colors.
     * `striped` -> Changes the background color of each even row.
     */
    variant?: keyof typeof tableVariants;
}
/**
 * Tables are used to display data in a tabular fashion.
 */
export declare const Table: React.FC<TableProps>;
