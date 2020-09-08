import React from 'react'
import { HeadingProps, Heading } from '../../..'

export default {
  title: 'Headings'
}

export const Headers = (props?: Partial<HeadingProps>) => (
  <div>
    <Heading size="heading-1">Heading 1</Heading>
    <Heading size="heading-2">Heading 2</Heading>
    <Heading size="heading-3">Heading 3</Heading>
    <Heading size="heading-4">Heading 4</Heading>
  </div>
)
