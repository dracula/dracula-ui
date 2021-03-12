import { Switch } from '@/components/Switch/Switch'
import {
  SwitchColors,
  SwitchDisabled,
  SwitchNormal
} from '@/components/Switch/__stories__/Switch.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Switch, {
  basic() {
    return snapshot('Usage', SwitchNormal)
  },
  variations() {
    return [
      snapshot('Disabled', SwitchDisabled),
      snapshot('Colors', SwitchColors)
    ]
  }
})
