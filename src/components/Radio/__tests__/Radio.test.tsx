import { Radio } from '@/components/Radio/Radio'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/story-helpers/docs/site-docs'
import {
  RadioNormal,
  RadioDisabled,
  RadioColors
} from '@/components/Radio/__stories__/Radio.stories'

siteDocs(Radio, {
  basicUsage() {
    return buildSnapshot('Usage', RadioNormal)
  },
  variations() {
    return [
      buildSnapshot('Disabled', RadioDisabled),
      buildSnapshot('Colors', RadioColors)
    ] as SnapshotBuilder[]
  }
})
