import * as dg from 'react-docgen-typescript'
import path from 'path'
import globby from 'globby'

test('whatever', async () => {
  const options = {
    propFilter: (prop: any) => {
      if (prop.parent) {
        return !prop.parent.fileName.includes('node_modules')
      }

      return true
    }
  }

  const parsed = dg
    .withCustomConfig(path.join(__dirname, '../../tsconfig.json'), options)
    .parse(await globby('src/components/**/**.tsx'))

  console.log(JSON.stringify(parsed, null, '  '))
})
