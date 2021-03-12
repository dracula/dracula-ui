import {
  ComponentExample,
  renderSnapshot,
  SnapshotBuilder
} from './render-component'
import React from 'react'
import fs from 'fs-extra'
import { pretty } from './pretty'
import { getDocGen } from '../documentation/docgen/doc-generator'
import { toDSP } from '../documentation/dsp/component-generator'
import puppeteer from 'puppeteer'
import { componentScreenshot } from './screenshots/component-screenshot'

interface Documentation {
  basic: () => SnapshotBuilder
  variations: () => Array<SnapshotBuilder> | SnapshotBuilder
}

jest.setTimeout(10000)

const RECORDING = process.env.RECORDING

export function docs<T>(
  componentClass: React.FunctionComponent<T>,
  documentation: Documentation
) {
  const name = componentClass.displayName ?? componentClass.name
  const dspPath = `${process.cwd()}/dsp`

  describe(`Site: ${name}`, () => {
    let browser: puppeteer.Browser

    beforeAll(async () => {
      if (!RECORDING) {
        return
      }

      browser = await puppeteer.launch({ headless: true, devtools: true })
    })

    let examples: Record<string, ComponentExample> = {}

    afterAll(async () => {
      if (!RECORDING) {
        return
      }

      await browser.close()
      const docGen = getDocGen(name)
      const dsp = toDSP(name, examples, docGen)

      await fs.mkdirp(`${dspPath}/data/components/`).catch(() => {
        // folder already exists
      })

      const path = `${dspPath}/data/components/${name}.json`
      await fs.writeFile(path, pretty(JSON.stringify(dsp), 'json'))
    })

    test('Basic Usage', async () => {
      const variation = documentation.basic()
      const snapshot = renderSnapshot(
        variation.title,
        variation.comp,
        variation.docs
      )
      expect(snapshot).toMatchSnapshot()

      if (RECORDING) {
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

    const variations: SnapshotBuilder[] = ([] as SnapshotBuilder[]).concat(
      documentation.variations()
    )

    variations.forEach((variation) => {
      test(variation.title, async () => {
        const snapshot = renderSnapshot(
          variation.title,
          variation.comp,
          variation.docs
        )
        expect(snapshot).toMatchSnapshot()

        if (RECORDING) {
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
