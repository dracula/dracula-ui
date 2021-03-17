import React, { HTMLAttributes } from 'react';
import { MarginMixin, PaddingMixin } from '../../base/spacing';
export declare const headingSizes: {
    'heading-1': string;
    'heading-2': string;
    'heading-3': string;
    'heading-4': string;
    'heading-5': string;
    'heading-6': string;
};
export declare const headingColors: {
    purpleCyan: string;
    yellowPink: string;
    cyanGreen: string;
    pinkPurple: string;
    animated: string;
    cyan: string;
    green: string;
    orange: string;
    pink: string;
    purple: string;
    red: string;
    yellow: string;
    white: string;
    black: string;
    blackSecondary: string;
    blackLight: string;
};
/** Heading Props */
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, MarginMixin, PaddingMixin {
    /**
     * The size and type of Heading to be used.
     * Denotes hierarchy.
     */
    size?: keyof typeof headingSizes;
    /**
     * The Dracula UI color to be applied to the Heading.
     */
    color?: keyof typeof headingColors;
    as?: keyof HTMLElementTagNameMap;
}
/**
 * Heading is used to display headlines and other forms of hierarchical Text.
 *
 * Headings are similar to the base Text component, but restricted to certain
 * sizes and font weight.
 */
export declare const Heading: React.FC<HeadingProps>;
