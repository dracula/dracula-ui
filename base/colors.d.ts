export declare const supportColors: {
    white: string;
    black: string;
    blackSecondary: string;
    blackLight: string;
};
export declare const baseColors: {
    cyan: string;
    green: string;
    orange: string;
    pink: string;
    purple: string;
    red: string;
    yellow: string;
};
export declare const gradientColors: {
    purpleCyan: string;
    yellowPink: string;
    cyanGreen: string;
    pinkPurple: string;
    animated: string;
};
export declare const colors: {
    purpleCyan: string;
    yellowPink: string;
    cyanGreen: string;
    pinkPurple: string;
    animated: string;
    cyan: string;
    green: string;
    orange: string;
    pink: string;
    purple: string;
    red: string;
    yellow: string;
    white: string;
    black: string;
    blackSecondary: string;
    blackLight: string;
};
export declare type ColorNames = keyof typeof colors;
export declare type ColorMap = Record<ColorNames, string>;
export declare type SupportColorNames = keyof typeof supportColors;
export declare type SupportColorMap = Record<SupportColorNames, string>;
export declare type BaseColorNames = keyof typeof baseColors;
export declare type BaseColorMap = Record<BaseColorNames, string>;
export declare type GradientColorNames = keyof typeof gradientColors;
export declare type GradientBaseColorMap = Record<GradientColorNames, string>;
export declare const borderColors: GradientBaseColorMap;
export declare const glowColors: BaseColorMap;
export declare const baseTextColors: ColorMap;
export declare const colorUtilities: {
    classes: string[];
    react: {
        base: string[];
        text: string[];
        support: string[];
        gradient: string[];
        border: string[];
    };
};
