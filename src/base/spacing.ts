export const spacing = {
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
}

export type SpacingPropType = keyof typeof spacing | Array<keyof typeof spacing>

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
