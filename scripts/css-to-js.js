const listSelectors = require('list-selectors')
const fs = require('fs')

async function run() {
  listSelectors(
    ['dist/styles/**/*.css'], // source
    { include: ['classes'] }, // options
    ({ classes }) => {
      const components = classes.map((className) => {
        return {
          class: 'component',
          type: 'page',
          id: className,
          name: className,
          last_updated_by: 'System',
          description: `CSS class containing ${className}`,
          related_entity_ids: [],
          tags: ['component'],
          snippets: {
            trigger: className.replace('.drac-', 'css-'),
            languages: {
              css: className.replace('.', '')
            }
          }
        }
      })

      fs.writeFileSync(
        './dsp/data/css.json',
        JSON.stringify(
          {
            dsp_spec_version: '0.0.1',
            last_updated_by: '',
            last_updated: '2020-09-30T21:16:45.280Z',
            entities: components
          },
          null,
          '  '
        )
      )
    }
  )
}

run()
