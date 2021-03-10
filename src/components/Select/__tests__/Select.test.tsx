import { Select } from '@/components/Select/Select'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/documentation/site-docs'
import {
  SelectVariants,
  SelectSizes,
  SelectDisabled,
  SelectColors,
  SelectBasic
} from '@/components/Select/__stories__/Select.stories'

siteDocs(Select, {
  basicUsage() {
    return buildSnapshot('Usage', SelectBasic)
  },
  variations() {
    return [
      buildSnapshot('Sizes', SelectSizes),
      buildSnapshot('Disabled', SelectDisabled),
      buildSnapshot('Colors', SelectColors),
      buildSnapshot('Variants', SelectVariants)
    ] as SnapshotBuilder[]
  }
})
