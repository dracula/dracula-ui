import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Badge } from '@/components/Badge/Badge'

docs(Badge, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      `You can create a new Badge with any text content you'd like to highlight.`
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        Colors,
        'Badges can be customized to use any of the Dracula UI theme colors, including all solid, gradient, and animated colors.'
      ),
      snapshot(
        'Variants',
        Variants,
        "Use `outline` or `subtle` when you don't want your Badges to stand out, but still want to keep them playful."
      )
    ]
  }
})

function Usage() {
  return (
    <Badge>Badge</Badge>
  )
}

function Colors() {
  return (
    <Badge themeColor="animated">Fun Badge</Badge>
  )
}

function Variants() {
  return (
    <div>
      <Badge m="sm" themeColor="orange" variant="outline">
        Outline
      </Badge>

      <Badge m="sm" themeColor="cyan" variant="subtle">
        Subtle
      </Badge>
    </div>
  )
}