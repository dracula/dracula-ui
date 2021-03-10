import { HTMLAttributes } from 'react';
import { colors as backgroundColors } from '../../base/colors';
export declare const AvatarVariants: {
    normal: string;
    subtle: string;
};
export declare const AvatarBorderVariants: {
    normal: string;
    large: string;
    none: string;
};
/** Avatar Props */
export interface AvatarProps extends HTMLAttributes<HTMLSpanElement & HTMLImageElement> {
    /**
     * The title or name to be used in the avatar.
     */
    title: string;
    /**
     * The theme color for the avatar.
     * This property controls the border and glow colors for the component.
     */
    themeColor?: keyof typeof backgroundColors;
    /**
     * The variant property allows for consumers to choose from
     * a regular avatar, or a subtle variation.
     */
    variant?: keyof typeof AvatarVariants;
    /**
     * Allows for controlling the border of the avatar.
     * `large` -> to use a thicker border.
     * `none` -> hides the border.
     */
    borderVariant?: keyof typeof AvatarBorderVariants;
    /**
     * Sets the source for the profile picture.
     */
    src?: string;
}
/**
 * The Avatar component is used to represent a user.
 *
 * It displays a profile picture, or falls back to the user's initials
 * if a profile pic is not provided.
 */
export declare const Avatar: {
    (props: AvatarProps): JSX.Element;
    displayName: string;
};
