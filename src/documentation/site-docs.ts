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

    beforeAll(async () => {
      if (process.env.SCREENSHOT) {
        browser = await puppeteer.launch({ headless: true, devtools: true })
      }
    })

    afterAll(() => {
      browser && browser.close()
    })

    let examples: Record<string, ComponentExample> = {}

    afterAll(async () => {
      const docGen = getDocGen(name)
      const dsp = toDSP(name, examples, docGen)

      await fs.mkdirp(`${dspPath}/data/components/`).catch(() => {
        // folder already exists
      })

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

      if (process.env.SCREENSHOT) {
        const [screenshot, svg] = await componentScreenshot(
          browser,
          snapshot,
          null,
          name
        )

        snapshot.screenshot = screenshot
        snapshot.svgData = svg
      }

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

        if (process.env.SCREENSHOT) {
          const [screenshot, svg] = await componentScreenshot(
            browser,
            snapshot,
            variation,
            name
          )

          snapshot.screenshot = screenshot
          snapshot.svgData = svg
        }

        examples = {
          ...examples,
          [variation.title]: snapshot
        }
      })
    })
  })
}
