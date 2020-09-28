import * as dg from 'react-docgen-typescript'
import path from 'path'
import globby from 'globby'
import fs from 'fs'
import { pretty } from '@/story-helpers/pretty'

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

  parsed.forEach((componentMetadata) => {
    const name = componentMetadata.displayName
    const path = `${process.cwd()}/docs/${name}.json`
    fs.writeFileSync(
      path,
      pretty(JSON.stringify(componentMetadata, null, '  '), 'json')
    )
  })
})
