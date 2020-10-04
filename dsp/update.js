const fs = require('fs')
const dsp = require('./dsp.json')
const globby = require('globby')
const { last, uniq } = require('lodash')

const files = globby.sync(`${process.cwd()}/dsp/data/components`)

const componentFileNames = files.map((file) => {
  const lastPart = last(file.split('/'))
  return { src: `./data/components/${lastPart}` }
})

dsp.import = uniq([...dsp.import, ...componentFileNames]).sort()

fs.writeFileSync(
  `${process.cwd()}/dsp/dsp.json`,
  JSON.stringify(dsp, null, '  ')
)
