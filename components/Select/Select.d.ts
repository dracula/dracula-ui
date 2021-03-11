import { ColorMap } from '../../base/colors';
import React, { HTMLAttributes } from 'react';
export declare const selectVariants: {
    normal: string;
    outline: string;
};
export declare const selectSizes: {
    large: string;
    medium: string;
    small: string;
};
export declare const selectColors: ColorMap;
/** Select Props */
export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
    /** The Dracula UI theme color for the Select. */
    color?: keyof typeof selectColors;
    /**
     * Controls the size of the select based on pre-configured Dracula UI sizes.
     * Options: `small`, `medium`, `large`
     */
    size?: keyof typeof selectSizes;
    /**
     * The variation to be used for the Select element.
     * `normal` -> Regular Select component with a light background color.
     * `outline` -> Keeps the accent color, but removes the background.
     */
    variant?: keyof typeof selectVariants;
    disabled?: boolean;
}
/**
 * Select is a styled HTML Select element.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS, and small SVG component in order to keep Selects accessible.
 */
export declare const Select: React.FC<SelectProps>;
