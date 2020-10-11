import { Text } from '@/components/Typography/Text'
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
} from '@/components/Typography/__stories__/Text.stories'

siteDocs(Text, {
  basicUsage() {
    return buildSnapshot('Usage', TextBasic)
  },
  variations() {
    return [
      buildSnapshot('Colors', TextColors),
      buildSnapshot('Weights', TextWeights),
      buildSnapshot('Sizes', TextSizes),
    ] as SnapshotBuilder[]
  }
})
