import { Link } from '@/components/Link/Link'
import { docs } from '@/documentation/site-docs'
import {
  LinkSizings,
  LinkBasic,
  LinkWeights,
  LinkColors
} from '@/components/Link/__stories__/Link.stories'
import { snapshot } from '../../../documentation/render-component'

docs(Link, {
  basic() {
    return snapshot('Usage', LinkBasic)
  },
  variations() {
    return [
      snapshot('Colors', LinkColors),
      snapshot('Weights', LinkWeights),
      snapshot('Sizes', LinkSizings)
    ]
  }
})
