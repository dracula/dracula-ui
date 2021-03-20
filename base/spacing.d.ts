declare const padding: {
    none: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
};
declare type paddingType = keyof typeof padding;
export declare type PaddingMixin = {
    p?: paddingType;
    py?: paddingType;
    px?: paddingType;
    pt?: paddingType;
    pb?: paddingType;
    pl?: paddingType;
    pr?: paddingType;
};
export declare function paddingMixin(mixin: PaddingMixin): string[];
declare const margin: {
    none: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
};
declare type marginType = keyof typeof margin;
export declare type MarginMixin = {
    m?: marginType;
    my?: marginType;
    mx?: marginType;
    mt?: marginType;
    mb?: marginType;
    ml?: marginType;
    mr?: marginType;
};
export declare function marginMixin(mixin: MarginMixin): string[];
export declare const spacingUtilities: {
    classes: {
        padding: string[];
        margin: string[];
    };
    react: {
        padding: string[];
        margin: string[];
    };
};
export {};
