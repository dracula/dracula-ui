import { Tabs } from '@/components/Tabs/Tabs'
import {
  TabsColors,
  TabsNormal
} from '@/components/Tabs/__stories__/Tabs.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Tabs, {
  basic: () => snapshot('Usage', TabsNormal),
  variations: () => snapshot('Colors', TabsColors)
})
