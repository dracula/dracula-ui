import { colors } from '@/base/colors'

export const colorname = () => {
  const colorNames = Object.keys(colors)
  const index = Math.round(Math.random() * colorNames.length + 1)
  return colorNames[index]
}
