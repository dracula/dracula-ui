import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Divider } from '@/components/Divider/Divider'

docs(Divider, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      'Dividers are used to defined a thematic break in a page.'
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        Colors,
        'Dividers can be customized to use any of the Dracula UI theme colors.'
      )
    ]
  }
})

function Usage() {
  return (
    <Divider color="cyan" />
  )
}

function Colors() {
  return (
    <Divider color="yellow" />
  )
}