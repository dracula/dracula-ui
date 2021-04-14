import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Heading } from '@/components/Heading/Heading'

docs(Heading, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      'Heading is an abstraction/style that can/is applied to HTML heading elements.'
    )
  },
  variations() {
    return [
      snapshot(
        'Sizes',
        Sizes,
        'Heading sizes range from xs to 2xl using the Dracula UI font size scale.'
      ),
      snapshot(
        'Colors',
        Colors,
        'Headings can be customized to use any of the Dracula UI theme colors, including all solid, gradient, and animated colors.'
      ),
      snapshot(
        'Tags',
        Tags,
        'By default, every Heading is specified with the `<h2>` tag, but you can change that to better match your semantic needs.'
      ),
    ]
  }
})

function Usage() {
  return (
    <Heading>The quick vampire jumps over the lazy human</Heading>
  )
}

function Sizes() {
  return (
    <div>
      <Heading size="2xl">
        2xl
      </Heading>
      <Heading size="xl">
        xl
      </Heading>
      <Heading size="lg">
        lg
      </Heading>
      <Heading size="md">
        md
      </Heading>
      <Heading size="sm">
        sm
      </Heading>
      <Heading size="xs">
        xs
      </Heading>
    </div>
  )
}

function Colors() {
  return (
    <div>
      <Heading color="pink">
        pink
      </Heading>
      <Heading color="purpleCyan">
        purpleCyan
      </Heading>
    </div>
  )
}

function Tags() {
  return (
    <div>
      <Heading as="h1" size="2xl">
        h1
      </Heading>
      <Heading as="h2" size="xl">
        h2
      </Heading>
      <Heading as="h3" size="lg">
        h3
      </Heading>
      <Heading as="h4" size="md">
        h4
      </Heading>
      <Heading as="h5" size="sm">
        h5
      </Heading>
      <Heading as="h6" size="xs">
        h6
      </Heading>
    </div>
  )
}