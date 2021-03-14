export const spacing = {
  none: 'drac-spacing-none',
  noneX: 'drac-spacing-none-x',
  noneY: 'drac-spacing-none-y',
  xs: 'drac-spacing-tn',
  xsX: 'drac-spacing-xs-x',
  xsY: 'drac-spacing-xs-y',
  small: 'drac-spacing-sm',
  smallX: 'drac-spacing-sm-x',
  smallY: 'drac-spacing-sm-y',
  medium: 'drac-spacing-md',
  mediumX: 'drac-spacing-md-x',
  mediumY: 'drac-spacing-md-y',
  large: 'drac-spacing-lg',
  largeX: 'drac-spacing-lg-x',
  largeY: 'drac-spacing-lg-y'
}

export const margin = {
  none: 'drac-margin-none',
  noneX: 'drac-margin-none-x',
  noneY: 'drac-margin-none-y',
  xs: 'drac-margin-tn',
  xsX: 'drac-margin-xs-x',
  xsY: 'drac-margin-xs-y',
  small: 'drac-margin-sm',
  smallX: 'drac-margin-sm-x',
  smallY: 'drac-margin-sm-y',
  medium: 'drac-margin-md',
  mediumX: 'drac-margin-md-x',
  mediumY: 'drac-margin-md-y',
  large: 'drac-margin-lg',
  largeX: 'drac-margin-lg-x',
  largeY: 'drac-margin-lg-y'
}

export type SpacingPropType = keyof typeof spacing | Array<keyof typeof spacing>
export type MarginPropType = keyof typeof margin | Array<keyof typeof margin>

export function spacingClasses(input?: SpacingPropType): string[] {
  let spacingInput = input ?? []

  if (!Array.isArray(spacingInput)) {
    spacingInput = [spacingInput]
  }

  spacingInput = spacingInput as Array<keyof typeof spacing>

  return spacingInput.map((spc) => {
    return spacing[spc]
  })
}

export function marginClasses(input?: MarginPropType): string[] {
  let marginInput = input ?? []

  if (!Array.isArray(marginInput)) {
    marginInput = [marginInput]
  }

  marginInput = marginInput as Array<keyof typeof margin>

  return marginInput.map((spc) => {
    return margin[spc]
  })
}
