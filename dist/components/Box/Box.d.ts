import React, { HTMLAttributes } from 'react';
import { SpacingPropType } from '../../base/spacing';
import { colors } from '../../base/colors';
/**
 * Box Props
 */
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    /** The background color. */
    color?: keyof typeof colors;
    /** Dracula UI standard spacing properties. */
    spacing?: SpacingPropType;
}
/**
 * Box is the most primitive component of Dracula UI.
 * Using Box allows for consumers of the components library to compose
 * more complex patterns, components, and UIs.
 *
 * Box includes built-in Color and Spacing properties that make building
 * complex components convenient and consistent.
 */
export declare const Box: React.FC<BoxProps>;
