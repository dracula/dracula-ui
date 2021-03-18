import React from 'react'
import { Divider } from '@/components/Divider/Divider'
import {
  DividerColors,
  DividerNormal
} from '@/components/Divider/__stories__/Divider.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Divider, {
  basic() {
    return snapshot(
      'Usage',
      () => <Divider color="cyan" />,
      'Dividers are used to defined a thematic break in a page.'
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        () => <Divider color="yellow" />,
        'Dividers can be customized to use any of the Dracula UI theme colors.'
      )
    ]
  }
})
