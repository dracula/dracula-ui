import { docs } from '@/documentation/site-docs'
import React from 'react'
import { snapshot } from '../../../documentation/render-component'
import { Badge } from '../Badge'

docs(Badge, {
  basic: () =>
    snapshot(
      'Usage',
      () => <Badge>Badge</Badge>,
      `You can create a new Badge with any text content you'd like to highlight.`
    ),
  variations() {
    const colors = snapshot(
      'Colors',
      () => <Badge themeColor="animated">Fun Badge</Badge>,
      'Badges can be customized to use any of the Dracula UI theme colors, including all solid, gradient, and animated colors.'
    )

    const variants = snapshot(
      'Variants',
      () => (
        <div>
          <Badge themeColor="purpleCyan" variant="outline">
            Outline
          </Badge>

          <Badge themeColor="purple" variant="subtle">
            Subtle
          </Badge>
        </div>
      ),
      "Use `outline` or `subtle` when you don't want your Badges to stand out, but still want to keep them playful."
    )

    return [colors, variants]
  }
})
