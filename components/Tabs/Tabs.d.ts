import { ColorMap } from '../../base/colors';
import React, { HTMLAttributes } from 'react';
export declare const tabsColors: ColorMap;
/**
 * Tabs Props
 */
export interface TabsProps extends HTMLAttributes<HTMLUListElement> {
    /** The Dracula UI color for the Tabs. */
    color: keyof typeof tabsColors;
}
/**
 * Tabs are horizontal navigation elements used to display
 * content within the same page.
 */
export declare const Tabs: React.FC<TabsProps>;
