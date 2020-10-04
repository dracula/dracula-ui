import {
  ComponentExample,
  renderSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import React from 'react'
import fs from 'fs'
import { pretty } from '@/story-helpers/pretty'
import { getDocGen } from '@/documentation/docgen/doc-generator'
import { toDSP } from '@/documentation/dsp/component-generator'

interface Documentation {
  basicUsage: () => SnapshotBuilder
  variations: () => Array<SnapshotBuilder>
}

export function siteDocs<T>(
  componentClass: React.FunctionComponent<T>,
  documentation: Documentation
) {
  const name = componentClass.displayName ?? componentClass.name

  describe(`Site: ${name}`, () => {
    let examples: Record<string, ComponentExample> = {}

    afterAll(() => {
      const examplesPath = `${process.cwd()}/examples/${name}.json`
      fs.writeFileSync(examplesPath, pretty(JSON.stringify(examples), 'json'))

      const docGen = getDocGen(name)
      const docPath = `${process.cwd()}/docs/${name}.json`
      fs.writeFileSync(docPath, pretty(JSON.stringify(docGen), 'json'))

      const dsp = toDSP(name, examples.basic, docGen)
      const dspPath = `${process.cwd()}/dsp/data/components/${name}.json`
      fs.writeFileSync(dspPath, pretty(JSON.stringify(dsp), 'json'))
    })

    test('Basic Usage', () => {
      const variation = documentation.basicUsage()
      const snapshot = renderSnapshot(
        variation.title,
        variation.comp,
        variation.docs
      )
      expect(snapshot).toMatchSnapshot()
      examples = {
        ...examples,
        basic: snapshot
      }
    })

    const variations = documentation.variations()

    variations.forEach((variation) => {
      test(variation.title, () => {
        const snapshot = renderSnapshot(
          variation.title,
          variation.comp,
          variation.docs
        )
        expect(snapshot).toMatchSnapshot()

        examples = {
          ...examples,
          [variation.title]: snapshot
        }
      })
    })
  })
}
