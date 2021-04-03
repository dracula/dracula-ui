import { mapValues, omit } from 'lodash'

const padding = {
  none: 'drac-p-none',
  xxs: 'drac-p-xxs',
  xs: 'drac-p-xs',
  sm: 'drac-p-sm',
  md: 'drac-p-md',
  lg: 'drac-p-lg'
}

const paddingLeft = mapValues(padding, (clz) => clz.replace('-p-', '-pl-'))
const paddingRight = mapValues(padding, (clz) => clz.replace('-p-', '-pr-'))
const paddingTop = mapValues(padding, (clz) => clz.replace('-p-', '-pt-'))
const paddingBottom = mapValues(padding, (clz) => clz.replace('-p-', '-pb-'))
const paddingX = mapValues(padding, (clz) => clz.replace('-p-', '-px-'))
const paddingY = mapValues(padding, (clz) => clz.replace('-p-', '-py-'))

type paddingType = keyof typeof padding
export type PaddingMixin = {
  p?: paddingType

  py?: paddingType
  px?: paddingType

  pt?: paddingType
  pb?: paddingType

  pl?: paddingType
  pr?: paddingType
}

export function paddingMixin(mixin: PaddingMixin) {
  let classes: string[] = []

  if (mixin.p) {
    classes.push(padding[mixin.p])
  }

  if (mixin.py) {
    classes.push(paddingY[mixin.py])
  }

  if (mixin.px) {
    classes.push(paddingX[mixin.px])
  }

  if (mixin.pt) {
    classes.push(paddingTop[mixin.pt])
  }

  if (mixin.pb) {
    classes.push(paddingBottom[mixin.pb])
  }

  if (mixin.pl) {
    classes.push(paddingLeft[mixin.pl])
  }

  if (mixin.pr) {
    classes.push(paddingRight[mixin.pr])
  }

  return classes
}

const margin = {
  none: 'drac-m-none',
  xxs: 'drac-m-xxs',
  xs: 'drac-m-xs',
  sm: 'drac-m-sm',
  md: 'drac-m-md',
  lg: 'drac-m-lg'
}

const mLeft = mapValues(margin, (clz) => clz.replace('-m-', '-ml-'))
const mRight = mapValues(margin, (clz) => clz.replace('-m-', '-mr-'))
const mTop = mapValues(margin, (clz) => clz.replace('-m-', '-mt-'))
const mBottom = mapValues(margin, (clz) => clz.replace('-m-', '-mb-'))
const mX = mapValues(margin, (clz) => clz.replace('-m-', '-mx-'))
const mY = mapValues(margin, (clz) => clz.replace('-m-', '-my-'))

type marginType = keyof typeof margin
export type MarginMixin = {
  m?: marginType

  my?: marginType
  mx?: marginType

  mt?: marginType
  mb?: marginType

  ml?: marginType
  mr?: marginType
}

export function marginMixin(mixin: MarginMixin) {
  let classes: string[] = []

  if (mixin.m) {
    classes.push(margin[mixin.m])
  }

  if (mixin.my) {
    classes.push(mY[mixin.my])
  }

  if (mixin.mx) {
    classes.push(mX[mixin.mx])
  }

  if (mixin.mt) {
    classes.push(mTop[mixin.mt])
  }

  if (mixin.mb) {
    classes.push(mBottom[mixin.mb])
  }

  if (mixin.ml) {
    classes.push(mLeft[mixin.ml])
  }

  if (mixin.mr) {
    classes.push(mRight[mixin.mr])
  }

  return classes
}

export const spacingUtilities = {
  classes: {
    padding: [
      ...Object.values(padding),
      ...Object.values(paddingX),
      ...Object.values(paddingY),
      ...Object.values(paddingTop),
      ...Object.values(paddingBottom)
    ],
    margin: [
      ...Object.values(margin),
      ...Object.values(mX),
      ...Object.values(mY),
      ...Object.values(mTop),
      ...Object.values(mBottom)
    ]
  },
  react: {
    padding: [`p`, `px`, `py`, `pt`, `pb`, `pl`, `pr`],
    margin: [`m`, `mx`, `my`, `mt`, `mb`, `ml`, `mr`]
  }
}

/**
 * Removes all spacing props from props object
 */
export function cleanProps<T>(
  props: T & Partial<PaddingMixin> & Partial<MarginMixin>
) {
  return omit(props, [
    ...spacingUtilities.react.padding,
    ...spacingUtilities.react.margin
  ]) as Omit<T, keyof PaddingMixin | keyof MarginMixin>
}
