import React, { HTMLAttributes } from 'react';
import { ColorMap } from '../../base/colors';
export declare const checkboxColors: ColorMap;
/** Checkbox Props */
export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
    /** The Dracula UI theme color for the checkbox. */
    color?: keyof typeof checkboxColors;
    /** The name of the checkbox. Mirrors the name HTML attribute. */
    name?: string;
    disabled?: boolean;
}
/**
 * Checkbox is a styled HTML Input of type checkbox.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS in order to keep check boxes accessible.
 */
export declare const Checkbox: React.FC<CheckboxProps>;
