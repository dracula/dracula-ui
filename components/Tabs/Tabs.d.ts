import React, { HTMLAttributes } from 'react';
import { ColorMap } from '../../base/colors';
import { MarginPropType, SpacingPropType } from '../../base/spacing';
export declare const tabsColors: ColorMap;
/**
 * Tabs Props
 */
export interface TabsProps extends HTMLAttributes<HTMLUListElement> {
    /** The Dracula UI color for the Tabs. */
    color: keyof typeof tabsColors;
    /** Dracula UI standard spacing properties. */
    spacing?: SpacingPropType;
    /** Dracula UI standard margin properties. */
    margin?: MarginPropType;
}
/**
 * Tabs are horizontal navigation elements used to display
 * content within the same page.
 */
export declare const Tabs: React.FC<TabsProps>;
