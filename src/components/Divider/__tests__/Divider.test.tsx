import { Divider } from '@/components/Divider/Divider'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/documentation/site-docs'
import {
  DividerNormal,
  DividerColors
} from '@/components/Divider/__stories__/Divider.stories'

siteDocs(Divider, {
  basicUsage() {
    return buildSnapshot('Usage', DividerNormal)
  },
  variations() {
    return [buildSnapshot('Colors', DividerColors)] as SnapshotBuilder[]
  }
})
