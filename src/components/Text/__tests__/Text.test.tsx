import { Text } from '@/components/Text/Text'
import { docs } from '@/documentation/site-docs'
import {
  TextSizes,
  TextBasic,
  TextWeights,
  TextColors
} from '@/components/Text/__stories__/Text.stories'
import { snapshot } from '../../../documentation/render-component'

docs(Text, {
  basic() {
    return snapshot('Usage', TextBasic)
  },
  variations() {
    return [
      snapshot('Colors', TextColors),
      snapshot('Weights', TextWeights),
      snapshot('Sizes', TextSizes)
    ]
  }
})
