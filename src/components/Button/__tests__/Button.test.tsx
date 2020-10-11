import React from 'react'
import { Button } from '../Button'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/documentation/site-docs'
import {
  ButtonVariants,
  ButtonSizes,
  ButtonColors
} from '@/components/Button/__stories__/Button.stories'

siteDocs(Button, {
  basicUsage() {
    return buildSnapshot('Usage', () => <Button color="purple">Dracula</Button>)
  },
  variations() {
    return [
      buildSnapshot('Variants', ButtonVariants),
      buildSnapshot('Sizes', ButtonSizes),
      buildSnapshot('Colors', ButtonColors)
    ] as SnapshotBuilder[]
  }
})
