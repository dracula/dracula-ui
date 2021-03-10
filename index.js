
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dracula-ui.cjs.production.min.js')
} else {
  module.exports = require('./dracula-ui.cjs.development.js')
}
