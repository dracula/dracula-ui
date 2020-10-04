import * as dg from 'react-docgen-typescript'
import { ComponentExample } from '@/story-helpers/render-component'

type Component = {
  class: 'component'
  type: string
  id: string
  name: string
  last_updated: Date
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
}

export function toDSP(
  name: string,
  usage: ComponentExample,
  docs: dg.ComponentDoc
) {
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
        javascript: usage.react,
        html: usage.html
      }
    }
  }

  return {
    dsp_spec_version: '0.0.1',
    last_updated_by: 'System',
    last_updated: new Date(),
    entities: [comp]
  }
}
