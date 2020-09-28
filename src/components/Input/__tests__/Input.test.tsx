import { Input } from '@/components/Input/Input'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/story-helpers/docs/site-docs'
import {
  InputVariants,
  InputColors
} from '@/components/Input/__stories__/Input.stories'

siteDocs(Input, {
  basicUsage() {
    return buildSnapshot('Usage', InputVariants)
  },
  variations() {
    return [buildSnapshot('Colors', InputColors)] as SnapshotBuilder[]
  }
})
