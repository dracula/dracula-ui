import { ColorMap } from '../../base/colors';
import React, { HTMLAttributes } from 'react';
export declare const radioColors: ColorMap;
/** Radio Props */
export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
    /** The Dracula UI theme color for the radio button. */
    color: keyof typeof radioColors;
    /** The name of the radio. Mirrors the name HTML attribute. */
    name?: string;
}
/**
 * Radio is a styled HTML Input of type radio.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS in order to keep Radios accessible.
 */
export declare const Radio: React.FC<RadioProps>;