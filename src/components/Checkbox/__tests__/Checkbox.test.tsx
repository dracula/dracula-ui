import { Checkbox } from '@/components/Checkbox/Checkbox'
import {
  CheckboxColors,
  CheckboxDisabled,
  CheckboxNormal
} from '@/components/Checkbox/__stories__/Checkbox.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Checkbox, {
  basic() {
    return snapshot('Usage', CheckboxNormal)
  },
  variations() {
    return [
      snapshot('Disabled', CheckboxDisabled),
      snapshot('Colors', CheckboxColors)
    ]
  }
})
