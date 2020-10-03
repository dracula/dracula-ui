import { Table } from '@/components/Table/Table'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/story-helpers/docs/site-docs'
import {
  TableVariants,
  TableColors
} from '@/components/Table/__stories__/Table.stories'

siteDocs(Table, {
  basicUsage() {
    return buildSnapshot('Usage', TableVariants)
  },
  variations() {
    return [buildSnapshot('Colors', TableColors)] as SnapshotBuilder[]
  }
})
