import React, { HTMLAttributes } from 'react';
export declare const dividerColors: Record<"white" | "cyan" | "green" | "orange" | "pink" | "purple" | "red" | "yellow" | "purpleCyan" | "yellowPink" | "cyanGreen" | "pinkPurple" | "animated", string>;
/**
 * Divider Props
 */
export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
    /** The Dracula UI color for the Divider. */
    color: keyof typeof dividerColors;
}
/**
 * Dividers are horizontal lines used to separate semantic blocks of
 * content or UI patterns.
 */
export declare const Divider: React.FC<DividerProps>;
