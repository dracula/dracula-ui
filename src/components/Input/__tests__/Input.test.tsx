import { Input } from '@/components/Input/Input'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/documentation/site-docs'
import {
  InputVariants,
  InputColors,
  InputBasic
} from '@/components/Input/__stories__/Input.stories'

siteDocs(Input, {
  basicUsage() {
    return buildSnapshot('Usage', InputBasic)
  },
  variations() {
    return [
      buildSnapshot('Colors', InputColors),
      buildSnapshot('Variants', InputVariants)
    ] as SnapshotBuilder[]
  }
})
