import puppeteer from 'puppeteer'
import { ComponentExample, SnapshotBuilder } from '../render-component'

// @ts-ignore
import parseData from 'parse-data-url'

import fs from 'fs-extra'
import { pretty } from '../pretty'

export async function componentScreenshot(
  browser: puppeteer.Browser,
  snapshot: ComponentExample,
  variation: SnapshotBuilder | null,
  name: string
): Promise<[string, string | undefined]> {
  const page = await browser.newPage()

  await page.setViewport({
    width: 2000,
    height: 2000,
    deviceScaleFactor: 2
  })

  await page.setContent(`
    <div id="drac" class="drac">
      ${snapshot.html}
    </div>
  `)

  await page.addScriptTag({
    path: process.cwd() + '/vendor/html-to-image.js'
  })

  await page.addStyleTag({
    path: process.cwd() + '/dist/styles/dracula-ui.css'
  })

  await page.addStyleTag({
    path: process.cwd() + '/node_modules/normalize.css/normalize.css'
  })

  await page.addStyleTag({
    content: `
      body {
        background: #414558;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #drac {
        padding: 20px;
      }
    `
  })

  const path = `./dsp/assets/${name}${variation?.title ?? ''}.png`

  const dracElement = await page.$('.drac')
  const box = await dracElement?.boundingBox()

  await page.screenshot({
    path,
    clip: box ?? undefined
  })

  await page.evaluate(
    `window.HTMLToImage.toSvg(document.getElementById('drac')).then(data => {
      window.svg = data
    })`
  )

  await page.waitForFunction(`window.svg !== undefined`)
  const dataURL = await page.evaluate(`window.svg`)

  const parsed = parseData(dataURL)
  let svgPath: string | undefined = undefined

  if (parsed) {
    svgPath = `./dsp/assets/svgs/${name}${variation?.title ?? ''}.svg`
    await fs.writeFile(svgPath, decodeURIComponent(parsed.data))
  }

  const content = await page.content()
  const contentPath = `./dsp/assets/html/${name}${variation?.title ?? ''}.html`
  await fs.writeFile(contentPath, pretty(content, 'html'))

  return [path, svgPath]
}
