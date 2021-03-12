import prettier from 'prettier'

export function pretty(
  code: string,
  parser: prettier.Options['parser'],
  options?: prettier.Options
) {
  return prettier.format(code, {
    ...options,
    parser
  })
}
