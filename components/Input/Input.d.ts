import React, { HTMLAttributes } from 'react';
import { ColorMap } from '../../base/colors';
import { MarginMixin, PaddingMixin } from '../../base/spacing';
export declare const inputVariants: {
    normal: string;
    outline: string;
};
export declare const inputSizes: {
    large: string;
    medium: string;
    small: string;
};
export declare const inputColors: Partial<ColorMap>;
/** Input Props */
export interface InputProps extends HTMLAttributes<HTMLInputElement>, PaddingMixin, MarginMixin {
    /**
     * The Dracula UI theme color to be used
     */
    color?: keyof typeof inputColors;
    /**
     * Controls the size of the input based on pre-configured Dracula UI sizes.
     */
    size?: keyof typeof inputSizes;
    /**
     * Controls the variation the input.
     * `normal` -> Regular Input component with a light background color.
     * `outline` -> Keeps the accent color, but removes the background.
     */
    variant?: keyof typeof inputVariants;
}
/**
 * Input is a styled HTML Input.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS in order to keep inputs accessible.
 */
export declare const Input: React.FC<InputProps>;
