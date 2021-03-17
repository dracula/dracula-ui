import React, { AllHTMLAttributes } from 'react';
import { colors as backgroundColors } from '../../base/colors';
import { MarginMixin, PaddingMixin } from '../../base/spacing';
declare const variants: {
    normal: string;
    subtle: string;
    outline: string;
};
/**
 * Badge Props
 */
export declare type BadgeProps = {
    /**
     * The theme variation color for a badge.
     */
    themeColor?: keyof typeof backgroundColors;
    /**
     * The variants for the Badge components.
     * `normal` -> Default solid badge.
     * `subtle` -> Subtler background, highlights the text.
     * `outline` -> No background color, just borders and text.
     */
    variant?: keyof typeof variants;
} & AllHTMLAttributes<HTMLSpanElement> & PaddingMixin & MarginMixin;
/**
 * Badges are used to denote status or to highlight specific
 * information.
 */
export declare const Badge: React.FC<BadgeProps>;
export {};
