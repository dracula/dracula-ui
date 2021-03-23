import React, { HTMLAttributes } from 'react';
import { MarginMixin, PaddingMixin } from '../../base/spacing';
export declare const textSizes: {
    large: string;
    medium: string;
    small: string;
    xsmall: string;
};
export declare const textWeights: {
    normal: string;
    semibold: string;
    bold: string;
};
export declare const lineHeights: {
    none: string;
    small: string;
    normal: string;
    medium: string;
    large: string;
    xlarge: string;
};
export declare const textColors: {
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
/** Text Props */
export interface TextProps extends HTMLAttributes<HTMLSpanElement>, PaddingMixin, MarginMixin {
    /**
     * Controls the size of the text based on pre-configured Dracula UI sizes.
     */
    size?: keyof typeof textSizes;
    /**
     * Controls the weight of the text.
     */
    weight?: keyof typeof textWeights;
    /**
     * Controls the line height of a text.
     */
    lineHeight?: keyof typeof lineHeights;
    /**
     * Controls the color of the text
     */
    color?: keyof typeof textColors;
    as?: 'a' | 'span' | 'p';
}
/**
 * Text is the base component for any sort of text.
 *
 * Consumers of this component can control, the color, size,
 * weight, and spacing of Text.
 *
 * Use this component for generic, and non-hierarchical text that is
 * to be displayed on a page, or as part of other complex components
 * or UI patterns
 */
export declare const Text: {
    (props: TextProps): React.DetailedReactHTMLElement<{
        className: string;
        /**
         * Controls the size of the text based on pre-configured Dracula UI sizes.
         */
        size?: "large" | "medium" | "small" | "xsmall" | undefined;
        /**
         * Controls the weight of the text.
         */
        weight?: "normal" | "semibold" | "bold" | undefined;
        /**
         * Controls the line height of a text.
         */
        lineHeight?: "large" | "medium" | "small" | "normal" | "none" | "xlarge" | undefined;
        /**
         * Controls the color of the text
         */
        color?: "purpleCyan" | "yellowPink" | "cyanGreen" | "pinkPurple" | "animated" | "cyan" | "green" | "orange" | "pink" | "purple" | "red" | "yellow" | "white" | "black" | "blackSecondary" | "blackLight" | undefined;
        as?: "a" | "span" | "p" | undefined;
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | readonly string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;
        accessKey?: string | undefined;
        contentEditable?: boolean | "true" | "false" | "inherit" | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: boolean | "true" | "false" | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        placeholder?: string | undefined;
        slot?: string | undefined;
        spellCheck?: boolean | "true" | "false" | undefined;
        style?: React.CSSProperties | undefined;
        tabIndex?: number | undefined;
        title?: string | undefined;
        translate?: "yes" | "no" | undefined;
        radioGroup?: string | undefined;
        role?: string | undefined;
        about?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        resource?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "on" | "off" | undefined;
        inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
        is?: string | undefined;
        'aria-activedescendant'?: string | undefined;
        'aria-atomic'?: boolean | "true" | "false" | undefined;
        'aria-autocomplete'?: "none" | "inline" | "list" | "both" | undefined;
        'aria-busy'?: boolean | "true" | "false" | undefined;
        'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
        'aria-colcount'?: number | undefined;
        'aria-colindex'?: number | undefined;
        'aria-colspan'?: number | undefined;
        'aria-controls'?: string | undefined;
        'aria-current'?: boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time" | undefined;
        'aria-describedby'?: string | undefined;
        'aria-details'?: string | undefined;
        'aria-disabled'?: boolean | "true" | "false" | undefined;
        'aria-dropeffect'?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
        'aria-errormessage'?: string | undefined;
        'aria-expanded'?: boolean | "true" | "false" | undefined;
        'aria-flowto'?: string | undefined;
        'aria-grabbed'?: boolean | "true" | "false" | undefined;
        'aria-haspopup'?: boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
        'aria-hidden'?: boolean | "true" | "false" | undefined;
        'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
        'aria-keyshortcuts'?: string | undefined;
        'aria-label'?: string | undefined;
        'aria-labelledby'?: string | undefined;
        'aria-level'?: number | undefined;
        'aria-live'?: "off" | "assertive" | "polite" | undefined;
        'aria-modal'?: boolean | "true" | "false" | undefined;
        'aria-multiline'?: boolean | "true" | "false" | undefined;
        'aria-multiselectable'?: boolean | "true" | "false" | undefined;
        'aria-orientation'?: "horizontal" | "vertical" | undefined;
        'aria-owns'?: string | undefined;
        'aria-placeholder'?: string | undefined;
        'aria-posinset'?: number | undefined;
        'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
        'aria-readonly'?: boolean | "true" | "false" | undefined;
        'aria-relevant'?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
        'aria-required'?: boolean | "true" | "false" | undefined;
        'aria-roledescription'?: string | undefined;
        'aria-rowcount'?: number | undefined;
        'aria-rowindex'?: number | undefined;
        'aria-rowspan'?: number | undefined;
        'aria-selected'?: boolean | "true" | "false" | undefined;
        'aria-setsize'?: number | undefined;
        'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
        'aria-valuemax'?: number | undefined;
        'aria-valuemin'?: number | undefined;
        'aria-valuenow'?: number | undefined;
        'aria-valuetext'?: string | undefined;
        children?: React.ReactNode;
        dangerouslySetInnerHTML?: {
            __html: string;
        } | undefined;
        onCopy?: ((event: React.ClipboardEvent<HTMLSpanElement>) => void) | undefined;
        onCopyCapture?: ((event: React.ClipboardEvent<HTMLSpanElement>) => void) | undefined;
        onCut?: ((event: React.ClipboardEvent<HTMLSpanElement>) => void) | undefined;
        onCutCapture?: ((event: React.ClipboardEvent<HTMLSpanElement>) => void) | undefined;
        onPaste?: ((event: React.ClipboardEvent<HTMLSpanElement>) => void) | undefined;
        onPasteCapture?: ((event: React.ClipboardEvent<HTMLSpanElement>) => void) | undefined;
        onCompositionEnd?: ((event: React.CompositionEvent<HTMLSpanElement>) => void) | undefined;
        onCompositionEndCapture?: ((event: React.CompositionEvent<HTMLSpanElement>) => void) | undefined;
        onCompositionStart?: ((event: React.CompositionEvent<HTMLSpanElement>) => void) | undefined;
        onCompositionStartCapture?: ((event: React.CompositionEvent<HTMLSpanElement>) => void) | undefined;
        onCompositionUpdate?: ((event: React.CompositionEvent<HTMLSpanElement>) => void) | undefined;
        onCompositionUpdateCapture?: ((event: React.CompositionEvent<HTMLSpanElement>) => void) | undefined;
        onFocus?: ((event: React.FocusEvent<HTMLSpanElement>) => void) | undefined;
        onFocusCapture?: ((event: React.FocusEvent<HTMLSpanElement>) => void) | undefined;
        onBlur?: ((event: React.FocusEvent<HTMLSpanElement>) => void) | undefined;
        onBlurCapture?: ((event: React.FocusEvent<HTMLSpanElement>) => void) | undefined;
        onChange?: ((event: React.FormEvent<HTMLSpanElement>) => void) | undefined;
        onChangeCapture?: ((event: React.FormEvent<HTMLSpanElement>) => void) | undefined;
        onBeforeInput?: ((event: React.FormEvent<HTMLSpanElement>) => void) | undefined;
        onBeforeInputCapture?: ((event: React.FormEvent<HTMLSpanElement>) => void) | undefined;
        onInput?: ((event: React.FormEvent<HTMLSpanElement>) => void) | undefined;
        onInputCapture?: ((event: React.FormEvent<HTMLSpanElement>) => void) | undefined;
        onReset?: ((event: React.FormEvent<HTMLSpanElement>) => void) | undefined;
        onResetCapture?: ((event: React.FormEvent<HTMLSpanElement>) => void) | undefined;
        onSubmit?: ((event: React.FormEvent<HTMLSpanElement>) => void) | undefined;
        onSubmitCapture?: ((event: React.FormEvent<HTMLSpanElement>) => void) | undefined;
        onInvalid?: ((event: React.FormEvent<HTMLSpanElement>) => void) | undefined;
        onInvalidCapture?: ((event: React.FormEvent<HTMLSpanElement>) => void) | undefined;
        onLoad?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onLoadCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onError?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onErrorCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onKeyDown?: ((event: React.KeyboardEvent<HTMLSpanElement>) => void) | undefined;
        onKeyDownCapture?: ((event: React.KeyboardEvent<HTMLSpanElement>) => void) | undefined;
        onKeyPress?: ((event: React.KeyboardEvent<HTMLSpanElement>) => void) | undefined;
        onKeyPressCapture?: ((event: React.KeyboardEvent<HTMLSpanElement>) => void) | undefined;
        onKeyUp?: ((event: React.KeyboardEvent<HTMLSpanElement>) => void) | undefined;
        onKeyUpCapture?: ((event: React.KeyboardEvent<HTMLSpanElement>) => void) | undefined;
        onAbort?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onAbortCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onCanPlay?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onCanPlayCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onCanPlayThrough?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onCanPlayThroughCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onDurationChange?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onDurationChangeCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onEmptied?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onEmptiedCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onEncrypted?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onEncryptedCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onEnded?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onEndedCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onLoadedData?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onLoadedDataCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onLoadedMetadata?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onLoadedMetadataCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onLoadStart?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onLoadStartCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onPause?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onPauseCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onPlay?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onPlayCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onPlaying?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onPlayingCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onProgress?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onProgressCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onRateChange?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onRateChangeCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onSeeked?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onSeekedCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onSeeking?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onSeekingCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onStalled?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onStalledCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onSuspend?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onSuspendCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onTimeUpdate?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onTimeUpdateCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onVolumeChange?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onVolumeChangeCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onWaiting?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onWaitingCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onAuxClick?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onAuxClickCapture?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onClick?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onClickCapture?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onContextMenu?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onContextMenuCapture?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onDoubleClick?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onDoubleClickCapture?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onDrag?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDragCapture?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDragEnd?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDragEndCapture?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDragEnter?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDragEnterCapture?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDragExit?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDragExitCapture?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDragLeave?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDragLeaveCapture?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDragOver?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDragOverCapture?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDragStart?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDragStartCapture?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDrop?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onDropCapture?: ((event: React.DragEvent<HTMLSpanElement>) => void) | undefined;
        onMouseDown?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onMouseDownCapture?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onMouseEnter?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onMouseLeave?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onMouseMove?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onMouseMoveCapture?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onMouseOut?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onMouseOutCapture?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onMouseOver?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onMouseOverCapture?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onMouseUp?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onMouseUpCapture?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
        onSelect?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onSelectCapture?: ((event: React.SyntheticEvent<HTMLSpanElement, Event>) => void) | undefined;
        onTouchCancel?: ((event: React.TouchEvent<HTMLSpanElement>) => void) | undefined;
        onTouchCancelCapture?: ((event: React.TouchEvent<HTMLSpanElement>) => void) | undefined;
        onTouchEnd?: ((event: React.TouchEvent<HTMLSpanElement>) => void) | undefined;
        onTouchEndCapture?: ((event: React.TouchEvent<HTMLSpanElement>) => void) | undefined;
        onTouchMove?: ((event: React.TouchEvent<HTMLSpanElement>) => void) | undefined;
        onTouchMoveCapture?: ((event: React.TouchEvent<HTMLSpanElement>) => void) | undefined;
        onTouchStart?: ((event: React.TouchEvent<HTMLSpanElement>) => void) | undefined;
        onTouchStartCapture?: ((event: React.TouchEvent<HTMLSpanElement>) => void) | undefined;
        onPointerDown?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerDownCapture?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerMove?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerMoveCapture?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerUp?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerUpCapture?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerCancel?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerCancelCapture?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerEnter?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerEnterCapture?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerLeave?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerLeaveCapture?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerOver?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerOverCapture?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerOut?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onPointerOutCapture?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onGotPointerCapture?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onGotPointerCaptureCapture?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onLostPointerCapture?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onLostPointerCaptureCapture?: ((event: React.PointerEvent<HTMLSpanElement>) => void) | undefined;
        onScroll?: ((event: React.UIEvent<HTMLSpanElement, UIEvent>) => void) | undefined;
        onScrollCapture?: ((event: React.UIEvent<HTMLSpanElement, UIEvent>) => void) | undefined;
        onWheel?: ((event: React.WheelEvent<HTMLSpanElement>) => void) | undefined;
        onWheelCapture?: ((event: React.WheelEvent<HTMLSpanElement>) => void) | undefined;
        onAnimationStart?: ((event: React.AnimationEvent<HTMLSpanElement>) => void) | undefined;
        onAnimationStartCapture?: ((event: React.AnimationEvent<HTMLSpanElement>) => void) | undefined;
        onAnimationEnd?: ((event: React.AnimationEvent<HTMLSpanElement>) => void) | undefined;
        onAnimationEndCapture?: ((event: React.AnimationEvent<HTMLSpanElement>) => void) | undefined;
        onAnimationIteration?: ((event: React.AnimationEvent<HTMLSpanElement>) => void) | undefined;
        onAnimationIterationCapture?: ((event: React.AnimationEvent<HTMLSpanElement>) => void) | undefined;
        onTransitionEnd?: ((event: React.TransitionEvent<HTMLSpanElement>) => void) | undefined;
        onTransitionEndCapture?: ((event: React.TransitionEvent<HTMLSpanElement>) => void) | undefined;
        p?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        py?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        px?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        pt?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        pb?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        pl?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        pr?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        m?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        my?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        mx?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        mt?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        mb?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        ml?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        mr?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
    }, HTMLElement>;
    displayName: string;
};
