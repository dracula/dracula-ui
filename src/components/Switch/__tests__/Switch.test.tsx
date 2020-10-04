import { Switch } from '@/components/Switch/Switch'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/documentation/site-docs'
import {
  SwitchNormal,
  SwitchDisabled,
  SwitchColors
} from '@/components/Switch/__stories__/Switch.stories'

siteDocs(Switch, {
  basicUsage() {
    return buildSnapshot('Usage', SwitchNormal)
  },
  variations() {
    return [
      buildSnapshot('Disabled', SwitchDisabled),
      buildSnapshot('Colors', SwitchColors)
    ] as SnapshotBuilder[]
  }
})
