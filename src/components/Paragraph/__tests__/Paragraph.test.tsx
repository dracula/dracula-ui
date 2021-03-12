import { Paragraph } from '@/components/Paragraph/Paragraph'
import {
  ParagraphBasic,
  ParagraphColors,
  ParagraphSizes,
  ParagraphWeights
} from '@/components/Paragraph/__stories__/Paragraph.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Paragraph, {
  basic() {
    return snapshot('Usage', ParagraphBasic)
  },
  variations() {
    return [
      snapshot('Colors', ParagraphColors),
      snapshot('Weights', ParagraphWeights),
      snapshot('Sizes', ParagraphSizes)
    ]
  }
})
