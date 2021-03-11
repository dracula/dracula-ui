import { Paragraph } from '@/components/Paragraph/Paragraph'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/documentation/site-docs'
import {
  ParagraphSizes,
  ParagraphBasic,
  ParagraphWeights,
  ParagraphColors
} from '@/components/Paragraph/__stories__/Paragraph.stories'

siteDocs(Paragraph, {
  basicUsage() {
    return buildSnapshot('Usage', ParagraphBasic)
  },
  variations() {
    return [
      buildSnapshot('Colors', ParagraphColors),
      buildSnapshot('Weights', ParagraphWeights),
      buildSnapshot('Sizes', ParagraphSizes)
    ] as SnapshotBuilder[]
  }
})
