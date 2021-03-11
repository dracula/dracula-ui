import { Text } from '@/components/Text/Text'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/documentation/site-docs'
import {
  TextSizes,
  TextBasic,
  TextWeights,
  TextColors
} from '@/components/Text/__stories__/Text.stories'

siteDocs(Text, {
  basicUsage() {
    return buildSnapshot('Usage', TextBasic)
  },
  variations() {
    return [
      buildSnapshot('Colors', TextColors),
      buildSnapshot('Weights', TextWeights),
      buildSnapshot('Sizes', TextSizes)
    ] as SnapshotBuilder[]
  }
})
