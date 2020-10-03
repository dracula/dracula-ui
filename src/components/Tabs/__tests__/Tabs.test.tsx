import { Tabs } from '@/components/Tabs/Tabs'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/story-helpers/docs/site-docs'
import {
  TabsNormal,
  TabsColors
} from '@/components/Tabs/__stories__/Tabs.stories'

siteDocs(Tabs, {
  basicUsage() {
    return buildSnapshot('Usage', TabsNormal)
  },
  variations() {
    return [buildSnapshot('Colors', TabsColors)] as SnapshotBuilder[]
  }
})
