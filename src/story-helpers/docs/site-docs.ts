import {
  ComponentExample,
  renderSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import React from 'react'
import fs from 'fs'
import { pretty } from '@/story-helpers/pretty'

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
      const path = `${process.cwd()}/examples/${name}.json`
      fs.writeFileSync(path, pretty(JSON.stringify(examples), 'json'))
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
