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
    return snapshot(
      'Usage',
      SelectBasic,
      'Select different items from a list.'
    )
  },
  variations() {
    return [
      snapshot(
        'Sizes',
        SelectSizes,
        'Select can be customize to use several different sizes.'
      ),
      snapshot(
        'Variants',
        SelectVariants,
        'There are two different variations you can use: `normal` and `outline`'
      ),
      snapshot(
        'Disabled',
        SelectDisabled,
        'A disabled select is unusable and un-clickable.'
      ),
      snapshot(
        'Colors',
        SelectColors,
        'Select can be customized to use any of the Dracula UI theme colors.'
      ),
    ]
  }
})
