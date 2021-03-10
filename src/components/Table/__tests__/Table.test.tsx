import { Table } from '@/components/Table/Table'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/documentation/site-docs'
import {
  TableVariants,
  TableColors,
  TableBasic
} from '@/components/Table/__stories__/Table.stories'

siteDocs(Table, {
  basicUsage() {
    return buildSnapshot('Usage', TableBasic)
  },
  variations() {
    return [
      buildSnapshot('Colors', TableColors),
      buildSnapshot('Variants', TableVariants)
    ] as SnapshotBuilder[]
  }
})
