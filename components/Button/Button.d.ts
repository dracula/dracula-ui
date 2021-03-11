import React, { HTMLAttributes } from 'react';
import { colors as backgroundColors } from '../../base/colors';
export declare const buttonVariants: {
    normal: string;
    outline: string;
    ghost: string;
};
export declare const buttonSizes: {
    large: string;
    medium: string;
    small: string;
    xsmall: string;
};
/** Button Props */
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** A Dracula UI theme color for the Button. */
    color?: keyof typeof backgroundColors;
    /**
     * Controls the size of the button based on pre-configured Dracula UI sizes.
     * Options: `xsmall`, `small`, `medium`, `large`
     */
    size?: keyof typeof buttonSizes;
    /**
     * Controls the Button style:
     * `normal` -> Default solid Button with background color.
     * `outline` -> A subtle variation of the Button component with a softer background color that highlights the action text.
     * `ghost` -> A less prominent variation of the Button component that highlights hover interactions.
     */
    variant?: keyof typeof buttonVariants;
    /**
     * Controls the Button state. Mirrors the HTMLButtonElement `disabled` property.
     */
    disabled?: boolean;
    as?: 'button' | 'a' | 'input';
}
/**
 * The Button component triggers actions, behaviors, or events based
 * on user input.
 */
export declare const Button: React.FC<ButtonProps>;
