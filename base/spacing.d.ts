export declare const spacing: {
    none: string;
    noneX: string;
    noneY: string;
    small: string;
    smallX: string;
    smallY: string;
    medium: string;
    mediumX: string;
    mediumY: string;
    large: string;
    largeX: string;
    largeY: string;
};
export declare type SpacingPropType = keyof typeof spacing | Array<keyof typeof spacing>;
export declare function spacingClasses(input?: SpacingPropType): string[];
