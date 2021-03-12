'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var cx = _interopDefault(require('classnames/dedupe'));
var lodash = require('lodash');
var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var colors = {
  white: 'drac-bg-white',
  cyan: 'drac-bg-cyan',
  green: 'drac-bg-green',
  orange: 'drac-bg-orange',
  pink: 'drac-bg-pink',
  purple: 'drac-bg-purple',
  red: 'drac-bg-red',
  yellow: 'drac-bg-yellow',
  purpleCyan: 'drac-bg-purple-cyan',
  yellowPink: 'drac-bg-yellow-pink',
  cyanGreen: 'drac-bg-cyan-green',
  pinkPurple: 'drac-bg-pink-purple',
  animated: 'drac-bg-animated'
};
var borderColors = /*#__PURE__*/lodash.mapValues(colors, function (className) {
  return className.replace('-bg-', '-border-');
});
var baseTextColors = /*#__PURE__*/lodash.mapValues(colors, function (className) {
  return className.replace('-bg-', '-text-');
});

var spacing = {
  none: 'drac-spacing-none',
  noneX: 'drac-spacing-none-x',
  noneY: 'drac-spacing-none-y',
  small: 'drac-spacing-sm',
  smallX: 'drac-spacing-sm-x',
  smallY: 'drac-spacing-sm-y',
  medium: 'drac-spacing-md',
  mediumX: 'drac-spacing-md-x',
  mediumY: 'drac-spacing-md-y',
  large: 'drac-spacing-lg',
  largeX: 'drac-spacing-lg-x',
  largeY: 'drac-spacing-lg-y'
};
function spacingClasses(input) {
  var spacingInput = input != null ? input : [];

  if (!Array.isArray(spacingInput)) {
    spacingInput = [spacingInput];
  }

  spacingInput = spacingInput;
  return spacingInput.map(function (spc) {
    return spacing[spc];
  });
}

var headingSizes = {
  'heading-1': 'drac-heading-1',
  'heading-2': 'drac-heading-2',
  'heading-3': 'drac-heading-3',
  'heading-4': 'drac-heading-4',
  'heading-5': 'drac-heading-5',
  'heading-6': 'drac-heading-6'
};
var headingColors = /*#__PURE__*/lodash.mapValues(colors, function (className) {
  return className.replace('-bg-', '-text-');
});
/**
 * Heading is used to display headlines and other forms of hierarchical Text.
 *
 * Headings are similar to the base Text component, but restricted to certain
 * sizes and font weight.
 */

var Heading = function Heading(props) {
  var _props$size, _props$size2, _props$color, _props$spacing, _finalProps$as;

  var tag = {
    'heading-1': 'h1',
    'heading-2': 'h2',
    'heading-3': 'h3',
    'heading-4': 'h4',
    'heading-5': 'h5',
    'heading-6': 'h6'
  };
  var size = tag[(_props$size = props.size) != null ? _props$size : 'heading-1'];

  var finalProps = _extends({}, props, {
    className: cx.apply(void 0, ["drac-heading", headingSizes[(_props$size2 = props.size) != null ? _props$size2 : 'heading-1'], headingColors[(_props$color = props.color) != null ? _props$color : 'white']].concat(spacingClasses((_props$spacing = props.spacing) != null ? _props$spacing : 'none')))
  });

  return React.createElement((_finalProps$as = finalProps.as) != null ? _finalProps$as : size, finalProps, props.children);
};
Heading.displayName = 'Heading';

var textSizes = {
  large: 'drac-text-lg',
  medium: 'drac-text',
  small: 'drac-text-sm',
  xsmall: 'drac-text-xs'
};
var textWeights = {
  normal: 'drac-text',
  semibold: 'drac-text-semibold',
  bold: 'drac-text-bold'
};
var textColors = /*#__PURE__*/lodash.mapValues(baseTextColors, function (className) {
  return className.replace('-bg-', '-text-');
});
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

var Text = function Text(props) {
  var _props$size, _props$weight, _props$color, _finalProps$as;

  var finalProps = _extends({}, props, {
    className: cx("drac-text", textSizes[(_props$size = props.size) != null ? _props$size : 'medium'], textWeights[(_props$weight = props.weight) != null ? _props$weight : 'normal'], textColors[(_props$color = props.color) != null ? _props$color : 'white'], spacingClasses(props.spacing))
  });

  return React.createElement((_finalProps$as = finalProps.as) != null ? _finalProps$as : 'span', finalProps, props.children);
};
Text.displayName = 'Text';

/**
 * Paragraph is a semantic component used for blocks of text with
 * semantic meaning.
 *
 * Paragraph accepts all the same customization options as Text.
 */

var Paragraph = function Paragraph(props) {
  var _props$size, _props$weight, _props$color, _props$spacing;

  var finalProps = _extends({}, props, {
    className: cx("drac-text", textSizes[(_props$size = props.size) != null ? _props$size : 'medium'], textWeights[(_props$weight = props.weight) != null ? _props$weight : 'normal'], textColors[(_props$color = props.color) != null ? _props$color : 'white'], spacingClasses((_props$spacing = props.spacing) != null ? _props$spacing : 'smallY'))
  });

  return React.createElement("p", Object.assign({}, finalProps), props.children);
};

var roundedBorders = {
  none: 'drac-rounded-none',
  sm: 'drac-rounded-sm',
  base: 'drac-rounded',
  lg: 'drac-rounded-lg',
  xl: 'drac-rounded-xl',
  '2xl': 'drac-rounded-2xl',
  '3xl': 'drac-rounded-3xl',
  full: 'drac-rounded-full'
};
/**
 * Box is the most primitive component of Dracula UI.
 * Using Box allows for consumers of the components library to compose
 * more complex patterns, components, and UIs.
 *
 * Box includes built-in Color and Spacing properties that make building
 * complex components convenient and consistent.
 */

function Box(props) {
  var _finalProps$as;

  var finalProps = _extends({}, props, {
    className: cx.apply(void 0, ["drac-box", props.color && colors[props.color], props.rounded && roundedBorders[props.rounded]].concat(spacingClasses(props.spacing), [props.className]))
  });

  var as = (_finalProps$as = finalProps.as) != null ? _finalProps$as : 'div';
  return React.createElement(as, finalProps, props.children);
}
Box.displayName = 'Box';

var buttonVariants = {
  normal: 'drac-btn',
  outline: 'drac-btn-outline',
  ghost: 'drac-btn-ghost'
};
var buttonSizes = {
  large: 'drac-btn-lg',
  medium: 'drac-btn',
  small: 'drac-btn-sm',
  xsmall: 'drac-btn-xs'
};
/**
 * The Button component triggers actions, behaviors, or events based
 * on user input.
 */

var Button = function Button(props) {
  var _props$color, _props$color2, _props$variant, _props$size, _props$as;

  var isOutline = props.variant === 'outline';
  var isGhost = props.variant === 'ghost';
  var overrideTextColor = isOutline || isGhost;
  var textColorClass = overrideTextColor ? textColors[(_props$color = props.color) != null ? _props$color : 'green'] : undefined;
  var backgroundClass = colors[(_props$color2 = props.color) != null ? _props$color2 : 'green'];

  if (isGhost) {
    backgroundClass = backgroundClass + "-transparent";
  }

  var classes = cx('drac-btn', backgroundClass, buttonVariants[(_props$variant = props.variant) != null ? _props$variant : 'normal'], buttonSizes[(_props$size = props.size) != null ? _props$size : 'medium'], textColorClass);
  return React.createElement((_props$as = props.as) != null ? _props$as : 'button', _extends({
    className: classes
  }, props), props.children);
};
Button.displayName = 'Button';

var variants = {
  normal: 'drac-badge',
  subtle: 'drac-badge-subtle',
  outline: 'drac-badge-outline'
};
/**
 * Badges are used to denote status or to highlight specific
 * information.
 */

var Badge = function Badge(props) {
  var _props$themeColor, _props$themeColor2, _props$variant;

  var isOutline = props.variant === 'outline';
  var isSubtle = props.variant === 'subtle';
  var overrideTextColor = isOutline || isSubtle;
  var textColorClass = overrideTextColor ? textColors[(_props$themeColor = props.themeColor) != null ? _props$themeColor : 'green'] : undefined;
  var backgroundClass = colors[(_props$themeColor2 = props.themeColor) != null ? _props$themeColor2 : 'green'];

  if (isSubtle) {
    backgroundClass = backgroundClass + "-transparent";
  }

  var classes = cx('drac-badge', backgroundClass, variants[(_props$variant = props.variant) != null ? _props$variant : 'normal'], textColorClass);
  return React.createElement("span", Object.assign({
    className: classes
  }, props), React.createElement(Text, {
    color: overrideTextColor ? props.themeColor : undefined
  }, props.children));
};
Badge.displayName = 'Badge';

var AvatarVariants = {
  normal: 'drac-avatar',
  subtle: 'drac-avatar-subtle'
};
var AvatarBorderVariants = {
  normal: '',
  large: 'drac-avatar-lg-stroke',
  none: 'drac-avatar-no-border'
};
/**
 * The Avatar component is used to represent a user.
 *
 * It displays a profile picture, or falls back to the user's initials
 * if a profile pic is not provided.
 */

var Avatar = function Avatar(props) {
  var _first, _last, _props$themeColor;

  var themeColor = props.themeColor,
      variant = props.variant,
      borderVariant = props.borderVariant,
      htmlProps = _objectWithoutPropertiesLoose(props, ["themeColor", "variant", "borderVariant", "src", "title"]);

  var backgroundClass = colors[themeColor != null ? themeColor : 'green'] + "-transparent";
  var classes = cx('drac-avatar', backgroundClass, textColors[themeColor != null ? themeColor : 'green'], AvatarVariants[variant != null ? variant : 'normal'], AvatarBorderVariants[borderVariant != null ? borderVariant : 'normal']);
  var names = props.title.split(' ');
  var f = (_first = lodash.first(names)) == null ? void 0 : _first.slice(0, 1);
  var l = (_last = lodash.last(names)) == null ? void 0 : _last.slice(0, 1);

  var style = _extends({}, props.style);

  if (props.src) {
    style.backgroundImage = "url('" + props.src + "')";
  }

  return React.createElement("span", Object.assign({
    className: classes,
    style: style
  }, htmlProps), !props.src && React.createElement(Text, {
    color: (_props$themeColor = props.themeColor) != null ? _props$themeColor : 'white'
  }, f, l));
};
Avatar.displayName = 'Avatar';

var inputVariants = {
  normal: 'drac-input',
  outline: 'drac-input-outline'
};
var inputSizes = {
  large: 'drac-input-lg',
  medium: 'drac-input',
  small: 'drac-input-sm'
};
var inputColors = {
  white: 'drac-input-white drac-text-white',
  cyan: 'drac-input-cyan drac-text-cyan',
  green: 'drac-input-green drac-text-green',
  orange: 'drac-input-orange drac-text-orange',
  pink: 'drac-input-pink drac-text-pink',
  purple: 'drac-input-purple drac-text-purple',
  red: 'drac-input-red drac-text-red',
  yellow: 'drac-input-yellow drac-text-yellow',
  animated: '',
  cyanGreen: '',
  pinkPurple: '',
  purpleCyan: '',
  yellowPink: ''
};
/**
 * Input is a styled HTML Input.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS in order to keep inputs accessible.
 */

var Input = function Input(props) {
  var finalProps = _extends({}, props, {
    className: cx("drac-input", props.variant && inputVariants[props.variant], props.size && inputSizes[props.size], props.color && inputColors[props.color])
  });

  var cleanProps = _objectWithoutPropertiesLoose(finalProps, ["size"]);

  return React.createElement("input", Object.assign({}, cleanProps));
};
Input.displayName = 'Input';

var selectVariants = {
  normal: 'drac-select',
  outline: 'drac-select-outline'
};
var selectSizes = {
  large: 'drac-select-lg',
  medium: 'drac-select',
  small: 'drac-select-sm'
};
var selectColors = {
  white: 'drac-select-white',
  cyan: 'drac-select-cyan',
  green: 'drac-select-green',
  orange: 'drac-select-orange',
  pink: 'drac-select-pink',
  purple: 'drac-select-purple',
  red: 'drac-select-red',
  yellow: 'drac-select-yellow',
  animated: '',
  cyanGreen: '',
  pinkPurple: '',
  purpleCyan: '',
  yellowPink: ''
};
/**
 * Select is a styled HTML Select element.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS, and small SVG component in order to keep Selects accessible.
 */

var Select = function Select(props) {
  var finalProps = _extends({}, props, {
    className: cx('drac-select', props.variant && selectVariants[props.variant], props.size && selectSizes[props.size], props.color && selectColors[props.color])
  });

  var cleanProps = _objectWithoutPropertiesLoose(finalProps, ["size"]);

  return React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement("select", Object.assign({}, cleanProps)), React.createElement("div", {
    className: "drac-select-arrow drac-text-" + props.color
  }, React.createElement("svg", {
    viewBox: "0 0 24 24",
    focusable: "false",
    role: "presentation",
    "aria-hidden": "true"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }))));
};
Select.displayName = 'Select';

var dividerColors = borderColors;
/**
 * Dividers are horizontal lines used to separate semantic blocks of
 * content or UI patterns.
 */

var Divider = function Divider(props) {
  var finalProps = _extends({}, props, {
    className: "drac-divider " + dividerColors[props.color]
  });

  return React.createElement("hr", Object.assign({}, finalProps));
};
Divider.displayName = 'Divider';

var radioColors = {
  white: 'drac-radio-white',
  cyan: 'drac-radio-cyan',
  green: 'drac-radio-green',
  orange: 'drac-radio-orange',
  pink: 'drac-radio-pink',
  purple: 'drac-radio-purple',
  red: 'drac-radio-red',
  yellow: 'drac-radio-yellow',
  animated: '',
  cyanGreen: '',
  pinkPurple: '',
  purpleCyan: '',
  yellowPink: ''
};
/**
 * Radio is a styled HTML Input of type radio.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS in order to keep Radios accessible.
 */

var Radio = function Radio(props) {
  var finalProps = _extends({}, props, {
    className: "drac-radio " + radioColors[props.color]
  });

  return React.createElement("input", Object.assign({
    type: "radio"
  }, finalProps));
};
Radio.displayName = 'Radio';

var checkboxColors = {
  white: 'drac-checkbox-white',
  cyan: 'drac-checkbox-cyan',
  green: 'drac-checkbox-green',
  orange: 'drac-checkbox-orange',
  pink: 'drac-checkbox-pink',
  purple: 'drac-checkbox-purple',
  red: 'drac-checkbox-red',
  yellow: 'drac-checkbox-yellow',
  animated: '',
  cyanGreen: '',
  pinkPurple: '',
  purpleCyan: '',
  yellowPink: ''
};
/**
 * Checkbox is a styled HTML Input of type checkbox.
 *
 * There are no behavior changes applied to the native HTML tag other
 * than light styling done via CSS in order to keep check boxes accessible.
 */

var Checkbox = function Checkbox(props) {
  var finalProps = _extends({}, props, {
    className: cx("drac-checkbox", props.color && checkboxColors[props.color])
  });

  return React.createElement("input", Object.assign({
    type: "checkbox"
  }, finalProps));
};
Checkbox.displayName = 'Checkbox';

var switchColors = {
  white: 'drac-switch-white',
  cyan: 'drac-switch-cyan',
  green: 'drac-switch-green',
  orange: 'drac-switch-orange',
  pink: 'drac-switch-pink',
  purple: 'drac-switch-purple',
  red: 'drac-switch-red',
  yellow: 'drac-switch-yellow',
  animated: '',
  cyanGreen: '',
  pinkPurple: '',
  purpleCyan: '',
  yellowPink: ''
};
/**
 * Switch is an abstraction pattern that represents toggles.
 *
 * Use the Switch component as an alternative for Checkboxes or Radios
 * when options are binary.
 *
 * Switches are implemented as Checkboxes under the hood,
 * and work normally with forms.
 */

var Switch = function Switch(props) {
  var finalProps = _extends({}, props, {
    className: "drac-switch drac-checkbox " + switchColors[props.color]
  });

  return React.createElement("input", Object.assign({
    type: "checkbox"
  }, finalProps));
};
Switch.displayName = 'Switch';

var cardOrientations = {
  normal: '',
  portrait: 'drac-card-portrait'
};
var cardVariants = {
  normal: '',
  subtle: 'drac-card-subtle'
};
/**
 * Card is a high level Pattern Component use to group
 * related or hierarchical information.
 */

var Card = function Card(props) {
  var classNames = cx('drac-card', props.className, props.orientation && cardOrientations[props.orientation], props.variant && cardVariants[props.variant], // apply border color based on theme color
  props.color && props.variant && borderColors[props.color]);
  return React.createElement(Box, Object.assign({}, props, {
    className: classNames
  }), props.children);
};
Card.displayName = 'Card';

var tabsColors = {
  white: 'drac-tabs-white',
  cyan: 'drac-tabs-cyan',
  green: 'drac-tabs-green',
  orange: 'drac-tabs-orange',
  pink: 'drac-tabs-pink',
  purple: 'drac-tabs-purple',
  red: 'drac-tabs-red',
  yellow: 'drac-tabs-yellow',
  animated: '',
  cyanGreen: '',
  pinkPurple: '',
  purpleCyan: '',
  yellowPink: ''
};
/**
 * Tabs are horizontal navigation elements used to display
 * content within the same page.
 */

var Tabs = function Tabs(props) {
  var finalProps = _extends({}, props, {
    className: cx('drac-tabs', props.color && tabsColors[props.color])
  });

  return React.createElement("ul", Object.assign({}, finalProps));
};
Tabs.displayName = 'Tabs';

var tableColors = {
  white: 'drac-table-white',
  cyan: 'drac-table-cyan',
  green: 'drac-table-green',
  orange: 'drac-table-orange',
  pink: 'drac-table-pink',
  purple: 'drac-table-purple',
  red: 'drac-table-red',
  yellow: 'drac-table-yellow',
  animated: '',
  cyanGreen: '',
  pinkPurple: '',
  purpleCyan: '',
  yellowPink: ''
};
var tableVariants = {
  normal: 'drac-table',
  striped: 'drac-table-striped'
};
/**
 * Tables are horizontal lines used to separate semantic blocks of
 * content or UI patterns.
 */

var Table = function Table(props) {
  var finalProps = _extends({}, props, {
    className: cx('drac-table', props.variant && tableVariants[props.variant], props.color && tableColors[props.color])
  });

  return React.createElement("table", Object.assign({}, finalProps));
};
Table.displayName = 'Table';

var listColors = {
  white: 'drac-list-white',
  cyan: 'drac-list-cyan',
  green: 'drac-list-green',
  orange: 'drac-list-orange',
  pink: 'drac-list-pink',
  purple: 'drac-list-purple',
  red: 'drac-list-red',
  yellow: 'drac-list-yellow',
  animated: '',
  cyanGreen: '',
  pinkPurple: '',
  purpleCyan: '',
  yellowPink: ''
};
var listVariants = {
  unordered: 'drac-list-unordered',
  ordered: 'drac-list-ordered'
};
/**
 * Lists are horizontal lines used to separate semantic blocks of
 * content or UI patterns.
 */

var List = function List(props) {
  var finalProps = _extends({}, props, {
    className: cx('drac-list', props.variant && listVariants[props.variant], props.color && listColors[props.color])
  });

  if (props.variant === 'unordered') {
    return React.createElement("ul", Object.assign({}, finalProps));
  }

  return React.createElement("ol", Object.assign({}, finalProps));
};
List.displayName = 'List';

exports.Avatar = Avatar;
exports.AvatarBorderVariants = AvatarBorderVariants;
exports.AvatarVariants = AvatarVariants;
exports.Badge = Badge;
exports.Box = Box;
exports.Button = Button;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.Divider = Divider;
exports.Heading = Heading;
exports.Input = Input;
exports.List = List;
exports.Paragraph = Paragraph;
exports.Radio = Radio;
exports.Select = Select;
exports.Switch = Switch;
exports.Table = Table;
exports.Tabs = Tabs;
exports.Text = Text;
exports.buttonSizes = buttonSizes;
exports.buttonVariants = buttonVariants;
exports.cardOrientations = cardOrientations;
exports.cardVariants = cardVariants;
exports.checkboxColors = checkboxColors;
exports.dividerColors = dividerColors;
exports.headingColors = headingColors;
exports.headingSizes = headingSizes;
exports.inputColors = inputColors;
exports.inputSizes = inputSizes;
exports.inputVariants = inputVariants;
exports.listColors = listColors;
exports.listVariants = listVariants;
exports.radioColors = radioColors;
exports.roundedBorders = roundedBorders;
exports.selectColors = selectColors;
exports.selectSizes = selectSizes;
exports.selectVariants = selectVariants;
exports.switchColors = switchColors;
exports.tableColors = tableColors;
exports.tableVariants = tableVariants;
exports.tabsColors = tabsColors;
exports.textColors = textColors;
exports.textSizes = textSizes;
exports.textWeights = textWeights;
//# sourceMappingURL=dracula-ui.cjs.development.js.map
