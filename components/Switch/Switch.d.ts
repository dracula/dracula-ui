import { ColorMap } from '../../base/colors';
import React, { HTMLAttributes } from 'react';
export declare const switchColors: ColorMap;
/** Switch Props. */
export interface SwitchProps extends HTMLAttributes<HTMLInputElement> {
    /** The name of the form element. */
    name?: string;
    /**
     * The Dracula UI theme color to be applied to the Switch.
     */
    color: keyof typeof switchColors;
    disabled?: boolean;
}
/**
 * Switch is an abstraction pattern that represents toggles.
 *
 * Use the Switch component as an alternative for Checkboxes or Radios
 * when options are binary.
 *
 * Switches are implemented as Checkboxes under the hood,
 * and work normally with forms.
 */
export declare const Switch: React.FC<SwitchProps>;
