import { List } from '@/components/List/List'
import { docs } from '@/documentation/site-docs'
import {
  ListNormal,
  ListColors,
  ListVariants
} from '@/components/List/__stories__/List.stories'
import { snapshot } from '../../../documentation/render-component'

docs(List, {
  basic() {
    return snapshot('Usage', ListNormal)
  },
  variations() {
    return [snapshot('Colors', ListColors), snapshot('Variants', ListVariants)]
  }
})
