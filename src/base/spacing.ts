import { mapValues } from 'lodash'

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

const m = {
  none: 'drac-m-none',
  xxs: 'drac-m-xxs',
  xs: 'drac-m-xs',
  sm: 'drac-m-sm',
  md: 'drac-m-md',
  lg: 'drac-m-lg'
}

const mLeft = mapValues(m, (clz) => clz.replace('-m-', '-ml-'))
const mRight = mapValues(m, (clz) => clz.replace('-m-', '-mr-'))
const mTop = mapValues(m, (clz) => clz.replace('-m-', '-mt-'))
const mBottom = mapValues(m, (clz) => clz.replace('-m-', '-mb-'))
const mX = mapValues(m, (clz) => clz.replace('-m-', '-mx-'))
const mY = mapValues(m, (clz) => clz.replace('-m-', '-my-'))

type marginType = keyof typeof m
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
    classes.push(m[mixin.m])
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
