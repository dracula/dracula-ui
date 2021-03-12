import { Heading } from '@/components/Heading/Heading'
import {
  HeadingBasic,
  HeadingColors,
  HeadingSizes
} from '@/components/Heading/__stories__/Heading.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Heading, {
  basic() {
    return snapshot('Usage', HeadingBasic)
  },
  variations() {
    return [snapshot('Sizes', HeadingSizes), snapshot('Colors', HeadingColors)]
  }
})
