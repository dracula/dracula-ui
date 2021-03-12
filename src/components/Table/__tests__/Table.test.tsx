import { Table } from '@/components/Table/Table'
import {
  TableBasic,
  TableColors,
  TableVariants
} from '@/components/Table/__stories__/Table.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Table, {
  basic() {
    return snapshot('Usage', TableBasic)
  },
  variations() {
    return [
      snapshot('Colors', TableColors),
      snapshot('Variants', TableVariants)
    ]
  }
})
