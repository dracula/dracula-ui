import { Select } from '@/components/Select/Select'
import { docs } from '@/documentation/site-docs'
import {
  SelectVariants,
  SelectSizes,
  SelectDisabled,
  SelectColors,
  SelectBasic
} from '@/components/Select/__stories__/Select.stories'
import { snapshot } from '../../../documentation/render-component'

docs(Select, {
  basic() {
    return snapshot('Usage', SelectBasic)
  },
  variations() {
    return [
      snapshot('Sizes', SelectSizes),
      snapshot('Disabled', SelectDisabled),
      snapshot('Colors', SelectColors),
      snapshot('Variants', SelectVariants)
    ]
  }
})
