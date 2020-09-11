import { ColorMap } from '@/base/colors'

export function withColors(
  colorMap: ColorMap,
  fn: (name: string, value: string) => unknown
) {
  return Object.entries(colorMap).map(([name, value]) => {
    return fn(name, value)
  })
}
