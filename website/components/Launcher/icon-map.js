import * as Dracula from 'dracula-ui'
import { difference } from 'lodash'

const componentNames = Object.keys(Dracula)
  .filter((name) => {
    const exp = Dracula[name]
    return Boolean(exp['displayName'])
  })
  .sort()

export const iconMap = {
  Anchor: 'box-arrow-up-right',
  Avatar: 'person-circle',
  Badge: 'textarea-resize',
  Box: 'bounding-box-circles',
  Button: 'bootstrap',
  Card: 'card-heading',
  Checkbox: 'ui-checks',
  Divider: 'hr',
  Heading: 'type-h1',
  Input: 'input-cursor-text',
  List: 'list-ul',
  OrderedList: 'list-ol',
  Paragraph: 'card-text',
  Radio: 'ui-radios-grid',
  Select: 'menu-button',
  Spacing: 'grid-1x2',
  Switch: 'toggles',
  Table: 'table',
  Tabs: 'segmented-nav',
  Text: 'type'
}

if (process.env.NODE_ENV === 'development') {
  const assert = require('assert')

  const missing = difference(componentNames, Object.keys(iconMap))
  if (missing.length > 0) {
    console.log('Missing Icons', missing)
  }

  assert(
    missing.length === 0,
    'Every Dracula UI component should have a corresponding Icon'
  )
}
