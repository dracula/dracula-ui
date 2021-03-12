import { Radio } from '@/components/Radio/Radio'
import { docs } from '@/documentation/site-docs'
import {
  RadioNormal,
  RadioDisabled,
  RadioColors
} from '@/components/Radio/__stories__/Radio.stories'
import { snapshot } from '../../../documentation/render-component'

docs(Radio, {
  basic() {
    return snapshot('Usage', RadioNormal)
  },
  variations() {
    return [
      snapshot('Disabled', RadioDisabled),
      snapshot('Colors', RadioColors)
    ]
  }
})
