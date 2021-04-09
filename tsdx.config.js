const postcss = require('rollup-plugin-postcss')
const inlineImport = require('postcss-import')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const filesize = require('rollup-plugin-filesize')

module.exports = {
  rollup(config, _options) {
    config.plugins.push(
      filesize(),
      postcss({
        plugins: [
          inlineImport(),
          autoprefixer(),
          cssnano({
            preset: 'default'
          }),
          require('postcss-each'),
          require('postcss-prefixer')({
            prefix: 'drac-'
          })
        ],
        sourceMap: true,
        extract: 'styles/dracula-ui.css'
      })
    )

    return config
  }
}
