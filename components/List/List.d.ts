import React, { HTMLAttributes } from 'react';
import { ColorMap } from '../../base/colors';
import { MarginMixin, PaddingMixin } from '../../base/spacing';
export declare const listColors: Partial<ColorMap>;
export declare const listVariants: {
    unordered: string;
    ordered: string;
    none: string;
};
/**
 * List Props
 */
export interface ListProps extends HTMLAttributes<HTMLOListElement>, PaddingMixin, MarginMixin {
    /** The Dracula UI color for the List. */
    color?: keyof typeof listColors;
    /**
     * The variation to be used for the List element.
     * `unordered` -> Display list in dashes as an `<ul>`
     * `ordered` -> Display list in numbers as an `<ol>`
     */
    variant?: keyof typeof listVariants;
}
/**
 * Lists are used to display list items in an ordered or unordered way.
 */
export declare const List: React.FC<ListProps>;
