import React from 'react';
import { BoxProps } from '../../components/Box/Box';
export declare const cardOrientations: {
    normal: string;
    portrait: string;
};
export declare type CardOrientationProps = keyof typeof cardOrientations;
export declare const cardVariants: {
    normal: string;
    subtle: string;
};
export declare type CardVariantProps = keyof typeof cardVariants;
/** Card Props */
export interface CardProps extends BoxProps {
    /**
     * The Card display variant.
     * `normal` -> Applies the chosen background color with dark text.
     * `subtle` -> Inverts the theme color, and adds a slight glow to the Card. Use this when you don't want all your cards to stand out.
     */
    variant?: CardVariantProps;
}
/**
 * Card is a high level Pattern Component use to group
 * related or hierarchical information.
 */
export declare const Card: React.FC<CardProps>;
