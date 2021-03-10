import * as dg from 'react-docgen-typescript'
import path from 'path'

export function getDocGen(name: string): dg.ComponentDoc {
  const options = {
    propFilter: (prop: any) => {
      if (prop.parent) {
        return !prop.parent.fileName.includes('node_modules')
      }

      return true
    }
  }

  const [componentMetadata] = dg
    .withCustomConfig(path.join(__dirname, '../../../tsconfig.json'), options)
    .parse(`src/components/${name}/${name}.tsx`)

  return componentMetadata
}
