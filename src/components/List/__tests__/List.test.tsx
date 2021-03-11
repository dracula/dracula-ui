import { List } from '@/components/List/List'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/documentation/site-docs'
import {
  ListNormal,
  ListColors,
  ListVariants,
} from '@/components/List/__stories__/List.stories'

siteDocs(List, {
  basicUsage() {
    return buildSnapshot('Usage', ListNormal)
  },
  variations() {
    return [
      buildSnapshot('Colors', ListColors),
      buildSnapshot('Variants', ListVariants)
    ] as SnapshotBuilder[]
  }
})
