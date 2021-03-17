import React from 'react'
import {
  HeadingColors,
  HeadingSizes
} from '@/components/Heading/__stories__/Heading.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'
import { Heading } from '../Heading'

docs(Heading, {
  basic() {
    return snapshot(
      'Usage',
      () => <Heading>Heading</Heading>,
      'Heading is an abstraction/style that can/is applied to HTML heading elements.'
    )
  },
  variations() {
    return [
      snapshot(
        'Sizes',
        () => (
          <div>
            <Heading size="heading-1">heading-1</Heading>
            <Heading size="heading-2">heading-2</Heading>
            <Heading size="heading-3">heading-3</Heading>
            <Heading size="heading-4">heading-4</Heading>
            <Heading size="heading-5">heading-5</Heading>
            <Heading size="heading-6">heading-6</Heading>
          </div>
        ),
        'Each heading size is mapped directly to a specific h tag in HTML.'
      ),
      snapshot(
        'Colors',
        () => (
          <div>
            <Heading size="heading-1" color="pink">
              pink
            </Heading>
            <Heading size="heading-1" color="purpleCyan">
              purpleCyan
            </Heading>
          </div>
        ),
        'Headings can be customized to use any of the Dracula UI theme colors, including all solid, gradient, and animated colors.'
      )
    ]
  }
})
