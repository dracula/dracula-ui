import React, { HTMLAttributes } from 'react';
import { ColorMap } from '../../base/colors';
import { MarginMixin, PaddingMixin } from '../../base/spacing';
export declare const tabsColors: Partial<ColorMap>;
/**
 * Tabs Props
 */
export interface TabsProps extends HTMLAttributes<HTMLUListElement>, PaddingMixin, MarginMixin {
    /** The Dracula UI color for the Tabs. */
    color: keyof typeof tabsColors;
}
/**
 * Tabs are horizontal navigation elements used to display
 * content within the same page.
 */
export declare const Tabs: React.FC<TabsProps>;
