import prettier from 'prettier'

export function pretty(code: string, parser: prettier.Options['parser']) {
  return prettier.format(code, {
    parser
  })
}
