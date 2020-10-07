import puppeteer from 'puppeteer'
import {
  ComponentExample,
  SnapshotBuilder
} from '../../story-helpers/render-component'

export async function componentScreenshot(
  browser: puppeteer.Browser,
  snapshot: ComponentExample,
  variation: SnapshotBuilder | null,
  name: string
): Promise<string> {
  const page = await browser.newPage()

  await page.setViewport({
    width: 2000,
    height: 2000,
    deviceScaleFactor: 1
  })

  await page.setContent(`
    <div id="drac" class="drac">
      ${snapshot.html}
    </div>
  `)
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

  return path
}
