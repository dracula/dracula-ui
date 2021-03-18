import React, { HTMLAttributes } from 'react';
import { ColorMap } from '../../base/colors';
import { MarginMixin, PaddingMixin } from '../../base/spacing';
export declare const checkboxColors: Partial<ColorMap>;
/** Checkbox Props */
export interface CheckboxProps extends HTMLAttributes<HTMLInputElement>, PaddingMixin, MarginMixin {
    /** The Dracula UI theme color for the checkbox. */
    color?: keyof typeof checkboxColors;
    /** The name of the checkbox. Mirrors the name HTML attribute. */
    name?: string;
    /**
   * A disabled checkbox is unusable and un-clickable.
   */
    disabled?: boolean;
}
/**
 * Checkbox is a styled HTML Input of type checkbox.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS in order to keep check boxes accessible.
 */
export declare const Checkbox: React.FC<CheckboxProps>;
