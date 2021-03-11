const fs = require('fs')
const globby = require('globby')
const rimraf = require('rimraf')

const dspComponent = require('./data/components.json')
const files = globby.sync(`${process.cwd()}/dsp/data/components`)

if (files.length === 0) {
  return
}

const components = files.map((file) =>
  JSON.parse(fs.readFileSync(file).toString())
)

dspComponent.entities = components

fs.writeFileSync(
  `${process.cwd()}/dsp/data/components.json`,
  JSON.stringify(dspComponent, null, '  ')
)
