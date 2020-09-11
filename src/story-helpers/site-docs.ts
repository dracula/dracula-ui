import {
  renderSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import React from 'react'

// import * as serializer from 'jest-snapshot-serializer-raw'

interface Documentation {
  basicUsage: () => SnapshotBuilder
  variations: () => Array<SnapshotBuilder>
}

export function siteDocs<T>(
  componentClass: React.FunctionComponent<T>,
  documentation: Documentation
) {
  describe(`Site: ${componentClass.displayName ?? componentClass.name}`, () => {
    test('Basic Usage', () => {
      const variation = documentation.basicUsage()
      const snapshot = renderSnapshot(
        variation.title,
        variation.comp(),
        variation.docs
      )
      expect(snapshot).toMatchSnapshot()
    })

    const variations = documentation.variations()

    variations.forEach(variation => {
      test(variation.title, () => {
        const snapshot = renderSnapshot(
          variation.title,
          variation.comp(),
          variation.docs
        )
        expect(snapshot).toMatchSnapshot()
      })
    })
  })
}
