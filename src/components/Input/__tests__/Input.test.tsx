import { Input } from '@/components/Input/Input'
import {
  InputBasic,
  InputColors,
  InputSizes,
  InputVariants
} from '@/components/Input/__stories__/Input.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Input, {
  basic() {
    return snapshot('Usage', InputBasic)
  },
  variations() {
    return [
      snapshot('Colors', InputColors),
      snapshot('Sizes', InputSizes),
      snapshot('Variants', InputVariants)
    ]
  }
})
