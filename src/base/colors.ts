import mapValues from 'lodash/mapValues'

export const supportColors = {
  white: 'drac-bg-white',
  black: 'drac-bg-black',
  blackSecondary: 'drac-bg-black-secondary',
  blackLight: 'drac-bg-black-light',
  grey: 'drac-bg-grey',
  greySecondary: 'drac-bg-grey-secondary',
  greyLight: 'drac-bg-grey-light'
}

export const baseColors = {
  cyan: 'drac-bg-cyan',
  green: 'drac-bg-green',
  orange: 'drac-bg-orange',
  pink: 'drac-bg-pink',
  purple: 'drac-bg-purple',
  red: 'drac-bg-red',
  yellow: 'drac-bg-yellow'
}

export const gradientColors = {
  purpleCyan: 'drac-bg-purple-cyan',
  yellowPink: 'drac-bg-yellow-pink',
  cyanGreen: 'drac-bg-cyan-green',
  pinkPurple: 'drac-bg-pink-purple'
}

export const animatedColors = {
  animated: 'drac-bg-animated'
}

export const colors = {
  ...supportColors,
  ...baseColors,
  ...gradientColors
}

export const backgroundColors = {
  ...colors,
  ...animatedColors
}

export type ColorNames = keyof typeof colors
export type ColorMap = Record<ColorNames, string>

export type SupportColorNames = keyof typeof supportColors
export type SupportColorMap = Record<SupportColorNames, string>

export type BaseColorNames = keyof typeof baseColors
export type BaseColorMap = Record<BaseColorNames, string>

export type GradientColorNames = keyof typeof gradientColors
export type GradientBaseColorMap = Record<GradientColorNames, string>

export const borderColors: BaseColorMap = mapValues(baseColors, (className) =>
  className.replace('-bg-', '-border-')
)

export const glowColors: BaseColorMap = mapValues(baseColors, (className) =>
  className.replace('-bg-', '-glow-')
)

export const baseTextColors: ColorMap = mapValues(colors, (className) => {
  return className.replace('-bg-', '-text-')
})

export const scrollbarColors: ColorMap = mapValues(
  colors,
  (className) => {
    return className.replace('-bg-', '-scrollbar-')
  }
)

export const colorUtilities = {
  classes: [
    ...Object.values(baseColors),
    ...Object.values(baseTextColors),
    ...Object.values(supportColors),
    ...Object.values(gradientColors),
    ...Object.values(borderColors),
    ...Object.values(animatedColors)
  ],
  react: {
    base: Object.keys(baseColors),
    text: Object.keys(baseTextColors),
    support: Object.keys(supportColors),
    gradient: Object.keys(gradientColors),
    border: Object.keys(borderColors),
    animated: Object.keys(animatedColors)
  }
}
