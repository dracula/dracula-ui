import {
  ButtonColors,
  ButtonSizes,
  ButtonVariants
} from '@/components/Button/__stories__/Button.stories'
import { docs } from '@/documentation/site-docs'
import React from 'react'
import { snapshot } from '../../../documentation/render-component'
import { Button } from '../Button'

docs(Button, {
  basic: () => snapshot('Usage', () => <Button color="purple">Dracula</Button>),
  variations: () => [
    snapshot('Variants', ButtonVariants),
    snapshot('Sizes', ButtonSizes),
    snapshot('Colors', ButtonColors)
  ]
})
