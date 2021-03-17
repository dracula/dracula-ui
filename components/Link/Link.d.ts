import React, { HTMLAttributes } from 'react';
import { MarginMixin, PaddingMixin } from '../../base/spacing';
import { textColors, textSizes, textWeights } from '../Text/Text';
export declare const linkHoverColors: {
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
/** Link Props */
export interface LinkProps extends HTMLAttributes<HTMLAnchorElement>, PaddingMixin, MarginMixin {
    /**
     * The path to link this anchor to.
     */
    href?: string;
    /**
     * Controls the size of the link based on pre-configured Dracula UI sizes.
     * Options: `xsmall`, `small`, `medium`, `large`
     */
    size?: keyof typeof textSizes;
    /**
     * Controls the weight of the link.
     * Options: `normal`, `semibold`, `bold`.
     */
    weight?: keyof typeof textWeights;
    /**
     * Controls the color of the link
     */
    color?: keyof typeof textColors;
    /**
     * Controls the color of the link on hover
     */
    hoverColor?: keyof typeof linkHoverColors;
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
export declare const Link: {
    (props: LinkProps): React.DetailedReactHTMLElement<{
        className: string;
        /**
         * The path to link this anchor to.
         */
        href?: string | undefined;
        /**
         * Controls the size of the link based on pre-configured Dracula UI sizes.
         * Options: `xsmall`, `small`, `medium`, `large`
         */
        size?: "large" | "medium" | "small" | "xsmall" | undefined;
        /**
         * Controls the weight of the link.
         * Options: `normal`, `semibold`, `bold`.
         */
        weight?: "normal" | "semibold" | "bold" | undefined;
        /**
         * Controls the color of the link
         */
        color?: "purpleCyan" | "yellowPink" | "cyanGreen" | "pinkPurple" | "animated" | "cyan" | "green" | "orange" | "pink" | "purple" | "red" | "yellow" | "white" | "black" | "blackSecondary" | "blackLight" | undefined;
        /**
         * Controls the color of the link on hover
         */
        hoverColor?: "purpleCyan" | "yellowPink" | "cyanGreen" | "pinkPurple" | "animated" | "cyan" | "green" | "orange" | "pink" | "purple" | "red" | "yellow" | "white" | "black" | "blackSecondary" | "blackLight" | undefined;
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
        'aria-current'?: boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | undefined;
        'aria-describedby'?: string | undefined;
        'aria-details'?: string | undefined;
        'aria-disabled'?: boolean | "true" | "false" | undefined;
        'aria-dropeffect'?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
        'aria-errormessage'?: string | undefined;
        'aria-expanded'?: boolean | "true" | "false" | undefined;
        'aria-flowto'?: string | undefined;
        'aria-grabbed'?: boolean | "true" | "false" | undefined;
        'aria-haspopup'?: boolean | "dialog" | "menu" | "true" | "false" | "listbox" | "tree" | "grid" | undefined;
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
        onCopy?: ((event: React.ClipboardEvent<HTMLAnchorElement>) => void) | undefined;
        onCopyCapture?: ((event: React.ClipboardEvent<HTMLAnchorElement>) => void) | undefined;
        onCut?: ((event: React.ClipboardEvent<HTMLAnchorElement>) => void) | undefined;
        onCutCapture?: ((event: React.ClipboardEvent<HTMLAnchorElement>) => void) | undefined;
        onPaste?: ((event: React.ClipboardEvent<HTMLAnchorElement>) => void) | undefined;
        onPasteCapture?: ((event: React.ClipboardEvent<HTMLAnchorElement>) => void) | undefined;
        onCompositionEnd?: ((event: React.CompositionEvent<HTMLAnchorElement>) => void) | undefined;
        onCompositionEndCapture?: ((event: React.CompositionEvent<HTMLAnchorElement>) => void) | undefined;
        onCompositionStart?: ((event: React.CompositionEvent<HTMLAnchorElement>) => void) | undefined;
        onCompositionStartCapture?: ((event: React.CompositionEvent<HTMLAnchorElement>) => void) | undefined;
        onCompositionUpdate?: ((event: React.CompositionEvent<HTMLAnchorElement>) => void) | undefined;
        onCompositionUpdateCapture?: ((event: React.CompositionEvent<HTMLAnchorElement>) => void) | undefined;
        onFocus?: ((event: React.FocusEvent<HTMLAnchorElement>) => void) | undefined;
        onFocusCapture?: ((event: React.FocusEvent<HTMLAnchorElement>) => void) | undefined;
        onBlur?: ((event: React.FocusEvent<HTMLAnchorElement>) => void) | undefined;
        onBlurCapture?: ((event: React.FocusEvent<HTMLAnchorElement>) => void) | undefined;
        onChange?: ((event: React.FormEvent<HTMLAnchorElement>) => void) | undefined;
        onChangeCapture?: ((event: React.FormEvent<HTMLAnchorElement>) => void) | undefined;
        onBeforeInput?: ((event: React.FormEvent<HTMLAnchorElement>) => void) | undefined;
        onBeforeInputCapture?: ((event: React.FormEvent<HTMLAnchorElement>) => void) | undefined;
        onInput?: ((event: React.FormEvent<HTMLAnchorElement>) => void) | undefined;
        onInputCapture?: ((event: React.FormEvent<HTMLAnchorElement>) => void) | undefined;
        onReset?: ((event: React.FormEvent<HTMLAnchorElement>) => void) | undefined;
        onResetCapture?: ((event: React.FormEvent<HTMLAnchorElement>) => void) | undefined;
        onSubmit?: ((event: React.FormEvent<HTMLAnchorElement>) => void) | undefined;
        onSubmitCapture?: ((event: React.FormEvent<HTMLAnchorElement>) => void) | undefined;
        onInvalid?: ((event: React.FormEvent<HTMLAnchorElement>) => void) | undefined;
        onInvalidCapture?: ((event: React.FormEvent<HTMLAnchorElement>) => void) | undefined;
        onLoad?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onLoadCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onError?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onErrorCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onKeyDown?: ((event: React.KeyboardEvent<HTMLAnchorElement>) => void) | undefined;
        onKeyDownCapture?: ((event: React.KeyboardEvent<HTMLAnchorElement>) => void) | undefined;
        onKeyPress?: ((event: React.KeyboardEvent<HTMLAnchorElement>) => void) | undefined;
        onKeyPressCapture?: ((event: React.KeyboardEvent<HTMLAnchorElement>) => void) | undefined;
        onKeyUp?: ((event: React.KeyboardEvent<HTMLAnchorElement>) => void) | undefined;
        onKeyUpCapture?: ((event: React.KeyboardEvent<HTMLAnchorElement>) => void) | undefined;
        onAbort?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onAbortCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onCanPlay?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onCanPlayCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onCanPlayThrough?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onCanPlayThroughCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onDurationChange?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onDurationChangeCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onEmptied?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onEmptiedCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onEncrypted?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onEncryptedCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onEnded?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onEndedCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onLoadedData?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onLoadedDataCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onLoadedMetadata?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onLoadedMetadataCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onLoadStart?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onLoadStartCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onPause?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onPauseCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onPlay?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onPlayCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onPlaying?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onPlayingCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onProgress?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onProgressCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onRateChange?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onRateChangeCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onSeeked?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onSeekedCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onSeeking?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onSeekingCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onStalled?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onStalledCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onSuspend?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onSuspendCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onTimeUpdate?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onTimeUpdateCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onVolumeChange?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onVolumeChangeCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onWaiting?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onWaitingCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onAuxClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onAuxClickCapture?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onClickCapture?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onContextMenu?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onContextMenuCapture?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onDoubleClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onDoubleClickCapture?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onDrag?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDragCapture?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDragEnd?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDragEndCapture?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDragEnter?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDragEnterCapture?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDragExit?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDragExitCapture?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDragLeave?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDragLeaveCapture?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDragOver?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDragOverCapture?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDragStart?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDragStartCapture?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDrop?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onDropCapture?: ((event: React.DragEvent<HTMLAnchorElement>) => void) | undefined;
        onMouseDown?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onMouseDownCapture?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onMouseEnter?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onMouseLeave?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onMouseMove?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onMouseMoveCapture?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onMouseOut?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onMouseOutCapture?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onMouseOver?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onMouseOverCapture?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onMouseUp?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onMouseUpCapture?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
        onSelect?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onSelectCapture?: ((event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void) | undefined;
        onTouchCancel?: ((event: React.TouchEvent<HTMLAnchorElement>) => void) | undefined;
        onTouchCancelCapture?: ((event: React.TouchEvent<HTMLAnchorElement>) => void) | undefined;
        onTouchEnd?: ((event: React.TouchEvent<HTMLAnchorElement>) => void) | undefined;
        onTouchEndCapture?: ((event: React.TouchEvent<HTMLAnchorElement>) => void) | undefined;
        onTouchMove?: ((event: React.TouchEvent<HTMLAnchorElement>) => void) | undefined;
        onTouchMoveCapture?: ((event: React.TouchEvent<HTMLAnchorElement>) => void) | undefined;
        onTouchStart?: ((event: React.TouchEvent<HTMLAnchorElement>) => void) | undefined;
        onTouchStartCapture?: ((event: React.TouchEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerDown?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerDownCapture?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerMove?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerMoveCapture?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerUp?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerUpCapture?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerCancel?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerCancelCapture?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerEnter?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerEnterCapture?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerLeave?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerLeaveCapture?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerOver?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerOverCapture?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerOut?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onPointerOutCapture?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onGotPointerCapture?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onGotPointerCaptureCapture?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onLostPointerCapture?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onLostPointerCaptureCapture?: ((event: React.PointerEvent<HTMLAnchorElement>) => void) | undefined;
        onScroll?: ((event: React.UIEvent<HTMLAnchorElement, UIEvent>) => void) | undefined;
        onScrollCapture?: ((event: React.UIEvent<HTMLAnchorElement, UIEvent>) => void) | undefined;
        onWheel?: ((event: React.WheelEvent<HTMLAnchorElement>) => void) | undefined;
        onWheelCapture?: ((event: React.WheelEvent<HTMLAnchorElement>) => void) | undefined;
        onAnimationStart?: ((event: React.AnimationEvent<HTMLAnchorElement>) => void) | undefined;
        onAnimationStartCapture?: ((event: React.AnimationEvent<HTMLAnchorElement>) => void) | undefined;
        onAnimationEnd?: ((event: React.AnimationEvent<HTMLAnchorElement>) => void) | undefined;
        onAnimationEndCapture?: ((event: React.AnimationEvent<HTMLAnchorElement>) => void) | undefined;
        onAnimationIteration?: ((event: React.AnimationEvent<HTMLAnchorElement>) => void) | undefined;
        onAnimationIterationCapture?: ((event: React.AnimationEvent<HTMLAnchorElement>) => void) | undefined;
        onTransitionEnd?: ((event: React.TransitionEvent<HTMLAnchorElement>) => void) | undefined;
        onTransitionEndCapture?: ((event: React.TransitionEvent<HTMLAnchorElement>) => void) | undefined;
        p?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        py?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined;
        px?: "none" | "xxs" | "xs" | "sm" | "md" | "lg" | undefined; /**
         * Controls the weight of the link.
         * Options: `normal`, `semibold`, `bold`.
         */
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
