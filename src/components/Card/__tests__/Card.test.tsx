import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Text } from '@/components/Text/Text'
import { Card } from '@/components/Card/Card'

docs(Card, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      'A Card is analogous to an HTML div and can contain any other component. Use Cards when you want to add hierarchy or highlight parts of your content.'
    )
  },
  variations: () => [
    snapshot(
      'Colors',
      Colors,
      'Cards can be customized to use any of the Dracula UI theme colors, including all solid, gradient, and animated colors.'
    ),

    snapshot(
      'Variants',
      Variants,
      'Use variant="subtle" to create discrete or secondary cards'
    ),

    snapshot(
      'Spacing',
      Spacing,
      'Cards come with pre defined spacing primitives for padding and margin that allow for customizing the spacing inside and around Cards.'
    )
  ]
})

function Usage() {
  return (
    <Card color="purple" p="sm">
      <Text color="black">Dracula</Text>
    </Card>
  )
}

function Colors() {
  return (
    <Card color="pinkPurple" p="sm">
      <Text color="black">Pink Purple</Text>
    </Card>
  )
}

function Variants() {
  return (
    <div>
      <Card variant="subtle" color="pink" p="md" m="md">
        <Text color="pink">Subtle Card</Text>
      </Card>
    </div>
  )
}

function Spacing() {
  return (
    <div>
      <Card color="yellowPink" p="xs">
        <Text color="black">xs padding</Text>
      </Card>

      <Card color="purpleCyan" p="sm">
        <Text color="black">sm padding</Text>
      </Card>

      <Card color="pinkPurple" p="md">
        <Text color="black">medium padding</Text>
      </Card>

      <Card color="yellowPink" m="xs">
        <Text color="black">xs margin</Text>
      </Card>

      <Card color="purpleCyan" m="sm">
        <Text color="black">sm margin</Text>
      </Card>

      <Card color="pinkPurple" m="md">
        <Text color="black">medium margin</Text>
      </Card>
    </div>
  )
}
