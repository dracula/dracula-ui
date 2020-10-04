import { Checkbox } from '@/components/Checkbox/Checkbox'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/documentation/site-docs'
import {
  CheckboxNormal,
  CheckboxDisabled,
  CheckboxColors
} from '@/components/Checkbox/__stories__/Checkbox.stories'

siteDocs(Checkbox, {
  basicUsage() {
    return buildSnapshot('Usage', CheckboxNormal)
  },
  variations() {
    return [
      buildSnapshot('Disabled', CheckboxDisabled),
      buildSnapshot('Colors', CheckboxColors)
    ] as SnapshotBuilder[]
  }
})
