import { Button } from '@/components/Button/Button'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/story-helpers/docs/site-docs'
import {
  ButtonNormal,
  ButtonVariants,
  ButtonColors
} from '@/components/Button/__stories__/Button.stories'

siteDocs(Button, {
  basicUsage() {
    return buildSnapshot('Usage', ButtonNormal)
  },
  variations() {
    return [
      buildSnapshot('Variants', ButtonVariants),
      buildSnapshot('Colors', ButtonColors)
    ] as SnapshotBuilder[]
  }
})
