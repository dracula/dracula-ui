import { mapValues } from 'lodash'

export const colors = {
  black: 'drac-bg-black',
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
}

export type ColorNames = keyof typeof colors
export type ColorMap = Record<ColorNames, string>

export const borderColors: ColorMap = mapValues(colors, className =>
  className.replace('-bg-', '-border-')
)

export const textColors: ColorMap = mapValues(colors, className => {
  return className.replace('-bg-', '-text-')
})
