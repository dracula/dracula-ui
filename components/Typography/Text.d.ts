import React, { HTMLAttributes } from 'react';
import { SpacingPropType } from '../../base/spacing';
export declare const textSizes: {
    large: string;
    medium: string;
    small: string;
    xsmall: string;
};
export declare const textWeights: {
    normal: string;
    semibold: string;
    bold: string;
};
export declare const textColors: {
    white: string;
    cyan: string;
    green: string;
    orange: string;
    pink: string;
    purple: string;
    red: string;
    yellow: string;
    purpleCyan: string;
    yellowPink: string;
    cyanGreen: string;
    pinkPurple: string;
    animated: string;
};
/** Text Props */
export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * Controls the size of the text based on pre-configured Dracula UI sizes.
     * Options: `xsmall`, `small`, `medium`, `large`
     */
    size?: keyof typeof textSizes;
    /**
     * Controsl the weight of the text.
     * Options: `normal`, `semibold`, `bold`.
     */
    weight?: keyof typeof textWeights;
    /**
     * Controls the color of the text
     */
    color?: keyof typeof textColors;
    /**
     * Controls the spacing between the Text component and its parent and siblings.
     */
    spacing?: SpacingPropType;
}
/**
 * Text is the base component for any sort of text.
 *
 * Consumers of this component can control, the color, size,
 * weight, and spacing of Text.
 *
 * Use this component for generic, and non-hierarchical text that is
 * to be displayed on a page, or as part of other complex components
 * or UI patterns
 */
export declare const Text: {
    (props: TextProps): JSX.Element;
    displayName: string;
};
/**
 * Paragraph is a semantic component used for blocks of text with
 * semantic meaning.
 *
 * Paragraph accepts all the same customization options as Text.
 */
export declare const Paragraph: React.FC<TextProps>;
