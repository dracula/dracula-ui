import { docs } from '@/documentation/site-docs'
import React from 'react'
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
            <Heading size="2xl">2xl</Heading>
            <Heading size="xl">xl</Heading>
            <Heading size="lg">lg</Heading>
            <Heading size="md">md</Heading>
            <Heading size="sm">sm</Heading>
            <Heading size="xs">xs</Heading>
          </div>
        ),
        'Heading sizes range from xs to 2xl using the Dracula UI font size scale.'
      ),
      snapshot(
        'Tags',
        () => (
          <div>
            <Heading as="h1">h1</Heading>
            <Heading as="h2">h2</Heading>
            <Heading as="h3">h3</Heading>
            <Heading as="h4">h4</Heading>
            <Heading as="h5">h5</Heading>
            <Heading as="h6">h6</Heading>
          </div>
        ),
        'By default, every Heading is specified with `h2`, but you can change that to better match your SEO needs.'
      ),
      snapshot(
        'Colors',
        () => (
          <div>
            <Heading size="2xl" color="pink">
              pink
            </Heading>
            <Heading size="2xl" color="purpleCyan">
              purpleCyan
            </Heading>
          </div>
        ),
        'Headings can be customized to use any of the Dracula UI theme colors, including all solid, gradient, and animated colors.'
      )
    ]
  }
})
