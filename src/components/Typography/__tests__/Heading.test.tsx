import { Heading } from '@/components/Typography/Heading'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/documentation/site-docs'
import {
  HeadingSizes,
  HeadingBasic,
  HeadingColors
} from '@/components/Typography/__stories__/Heading.stories'

siteDocs(Heading, {
  basicUsage() {
    return buildSnapshot('Usage', HeadingBasic)
  },
  variations() {
    return [
      buildSnapshot('Sizes', HeadingSizes),
      buildSnapshot('Colors', HeadingColors)
    ] as SnapshotBuilder[]
  }
})
