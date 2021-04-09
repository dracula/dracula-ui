const css = require('css')
const fs = require('fs-extra')
const uniq = require('lodash/uniq')

async function run() {
  const contents = await fs.readFile('./dist/styles/dracula-ui.css')

  const obj = css.parse(contents.toString(), {
    source: './dist/styles/dracula-ui.css.map'
  })

  const selectors = obj.stylesheet.rules
    .filter((rule) => rule.type === 'rule')
    .map((r) => {
      const uniqSelectors = uniq(r.selectors.filter((s) => s.startsWith('.')))

      const comments = (r.declarations ?? []).filter((dec) => {
        return dec.type === 'comment'
      })

      if (comments.length === 0 || uniqSelectors.length === 0) {
        return
      }

      return {
        selectors: uniqSelectors,
        comments
      }
    })
    .filter(Boolean)
    .sort()

  console.log(JSON.stringify(selectors, null, ' '))
}

run().catch(console.error)
