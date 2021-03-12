import { Divider } from '@/components/Divider/Divider'
import {
  DividerColors,
  DividerNormal
} from '@/components/Divider/__stories__/Divider.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Divider, {
  basic() {
    return snapshot('Usage', DividerNormal)
  },
  variations() {
    return [snapshot('Colors', DividerColors)]
  }
})
