import { ColorMap } from '../../base/colors';
import React, { HTMLAttributes } from 'react';
export declare const tableColors: ColorMap;
export declare const tableVariants: {
    normal: string;
    striped: string;
};
/**
 * Table Props
 */
export interface TableProps extends HTMLAttributes<HTMLTableElement> {
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
 * Tables are horizontal lines used to separate semantic blocks of
 * content or UI patterns.
 */
export declare const Table: React.FC<TableProps>;
