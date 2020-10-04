import { Select } from '@/components/Select/Select'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/documentation/site-docs'
import {
  SelectVariants,
  SelectDisabled,
  SelectColors
} from '@/components/Select/__stories__/Select.stories'

siteDocs(Select, {
  basicUsage() {
    return buildSnapshot('Usage', SelectVariants)
  },
  variations() {
    return [
      buildSnapshot('Disabled', SelectDisabled),
      buildSnapshot('Colors', SelectColors)
    ] as SnapshotBuilder[]
  }
})
