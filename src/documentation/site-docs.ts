import {
  ComponentExample,
  renderSnapshot,
  SnapshotBuilder
} from '../story-helpers/render-component'
import React from 'react'
import fs from 'fs-extra'
import { pretty } from '../story-helpers/pretty'
import { getDocGen } from '../documentation/docgen/doc-generator'
import { toDSP } from '../documentation/dsp/component-generator'
import puppeteer from 'puppeteer'
import { componentScreenshot } from './screenshots/component-screenshot'

interface Documentation {
  basicUsage: () => SnapshotBuilder
  variations: () => Array<SnapshotBuilder>
}

jest.setTimeout(10000)

export function siteDocs<T>(
  componentClass: React.FunctionComponent<T>,
  documentation: Documentation
) {
  const name = componentClass.displayName ?? componentClass.name
  const dspPath = `${process.cwd()}/dsp`

  describe(`Site: ${name}`, () => {
    let browser: puppeteer.Browser

    beforeEach(async () => {
      browser = await puppeteer.launch({ headless: true, devtools: true })
    })

    afterEach(async () => {
      await browser.close()
    })

    let examples: Record<string, ComponentExample> = {}

    afterAll(async () => {
      const docGen = getDocGen(name)
      const dsp = toDSP(name, examples, docGen)
      const path = `${dspPath}/data/components/${name}.json`
      await fs.writeFile(path, pretty(JSON.stringify(dsp), 'json'))
    })

    test('Basic Usage', async () => {
      const variation = documentation.basicUsage()
      const snapshot = renderSnapshot(
        variation.title,
        variation.comp,
        variation.docs
      )
      expect(snapshot).toMatchSnapshot()

      snapshot.screenshot = await componentScreenshot(
        browser,
        snapshot,
        null,
        name
      )

      examples = {
        ...examples,
        basic: snapshot
      }
    })

    const variations = documentation.variations()

    variations.forEach((variation) => {
      test(variation.title, async () => {
        const snapshot = renderSnapshot(
          variation.title,
          variation.comp,
          variation.docs
        )
        expect(snapshot).toMatchSnapshot()
        snapshot.screenshot = await componentScreenshot(
          browser,
          snapshot,
          variation,
          name
        )

        examples = {
          ...examples,
          [variation.title]: snapshot
        }
      })
    })
  })
}
