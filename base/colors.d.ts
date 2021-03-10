export declare const colors: {
    white: string;
    cyan: string;
    green: string;
    orange: string;
    pink: string;
    purple: string;
    red: string;
    yellow: string;
    purpleCyan: string;
    yellowPink: string;
    cyanGreen: string;
    pinkPurple: string;
    animated: string;
};
export declare type ColorNames = keyof typeof colors;
export declare type ColorMap = Record<ColorNames, string>;
export declare const borderColors: ColorMap;
export declare const baseTextColors: ColorMap;