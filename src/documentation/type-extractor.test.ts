import * as dg from 'react-docgen-typescript'
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

  const parsed = dg.parse(await globby('src/components/**/**.tsx'), options)
  console.log(JSON.stringify(parsed, null, '  '))
})
