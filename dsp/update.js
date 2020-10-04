const fs = require('fs')
const dsp = require('./dsp.json')
const globby = require('globby')
const { last, uniqBy } = require('lodash')

const files = globby.sync(`${process.cwd()}/dsp/data/components`)

const componentFileNames = files.map((file) => {
  const lastPart = last(file.split('/'))
  return { src: `./data/components/${lastPart}` }
})

dsp.import = uniqBy([...dsp.import, ...componentFileNames], (i) => i.src).sort()

fs.writeFileSync(
  `${process.cwd()}/dsp/dsp.json`,
  JSON.stringify(dsp, null, '  ')
)
