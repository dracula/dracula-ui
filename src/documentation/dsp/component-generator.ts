import * as dg from 'react-docgen-typescript'
import { ComponentExample } from '../../story-helpers/render-component'

type Component = {
  class: 'component'
  type: string
  id: string
  name: string
  last_updated: Date | string
  last_updated_by: string
  description: string
  tags: string[]
  related_entity_ids: string[]
  snippets: {
    trigger: string
    languages: {
      javascript: string
      html: string
    }
  }
  ext_com_draculaui_variations: ComponentExample[]
  ext_com_draculaui_props: dg.ComponentDoc['props']
  ext_com_draculaui_docgen: dg.ComponentDoc
}

export function toDSP(
  name: string,
  usage: Record<string, ComponentExample>,
  docs: dg.ComponentDoc
) {
  const { basic: basicUsage } = usage

  const comp: Component = {
    class: 'component',
    type: 'page',
    id: name,
    name,
    last_updated: new Date(),
    last_updated_by: 'System',
    description: docs.description,
    related_entity_ids: [],
    tags: ['component'],
    snippets: {
      trigger: name,
      languages: {
        javascript: basicUsage.react,
        html: basicUsage.html
      }
    },
    ext_com_draculaui_variations: Object.values(usage),
    ext_com_draculaui_props: docs.props,
    ext_com_draculaui_docgen: docs
  }

  return {
    dsp_spec_version: '0.0.1',
    last_updated_by: 'System',
    last_updated: new Date(),
    entities: [comp]
  }
}
