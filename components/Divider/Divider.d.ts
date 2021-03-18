import React, { HTMLAttributes } from 'react';
import { MarginMixin, PaddingMixin } from '../../base/spacing';
export declare const dividerColors: {
    cyan: string;
    green: string;
    /**
     * Divider Props
     */
    orange: string;
    pink: string;
    purple: string;
    red: string;
    yellow: string;
};
/**
 * Divider Props
 */
export interface DividerProps extends HTMLAttributes<HTMLDivElement>, PaddingMixin, MarginMixin {
    /** The Dracula UI color for the Divider. */
    color: keyof typeof dividerColors;
}
/**
 * Dividers are horizontal lines used to separate semantic blocks of
 * content or UI patterns.
 */
export declare const Divider: React.FC<DividerProps>;
