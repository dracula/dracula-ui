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
    return snapshot(
      'Usage',
      RadioNormal,
      'Radio buttons let a user select only one of a limited number of choices.'
    )
  },
  variations() {
    return [
      snapshot(
        'Disabled',
        RadioDisabled,
        'A radio select is unusable and un-clickable.'
      ),
      snapshot(
        'Colors',
        RadioColors,
        'Radio can be customized to use any of the Dracula UI theme colors.'
      )
    ]
  }
})
