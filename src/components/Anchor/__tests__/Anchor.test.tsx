import React from 'react'
import { Anchor } from '@/components/Anchor/Anchor'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Anchor, {
  basic() {
    return snapshot(
      'Usage',
      () => <Anchor href="#">anchor</Anchor>,
      'Anchor is an abstraction/style that can/is applied to HTML anchor elements.'
    )
  },
  variations() {
    return [
      snapshot(
        'Sizes & Weights',
        () => (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Anchor href="#" size="xsmall">
              xsmall
            </Anchor>
            <Anchor href="#" size="small">
              small
            </Anchor>
            <Anchor href="#" size="medium">
              medium
            </Anchor>
            <Anchor href="#" size="large">
              large
            </Anchor>
            <Anchor href="#" weight="semibold">
              semibold
            </Anchor>
            <Anchor href="#" style={{ fontSize: 30 }}>
              font-size: 30
            </Anchor>
          </div>
        ),
        'Anchor sizes can be customized with pre defined sizes or using regular HTML styles or CSS classes.'
      ),
      snapshot(
        'Colors',
        () => (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Anchor href="#" color="pink" hoverColor="purple" m="sm">
              pink / purple
            </Anchor>

            <Anchor href="#" color="cyanGreen" hoverColor="yellowPink" m="sm">
              cyanGreen / yellowPink
            </Anchor>
          </div>
        ),
        'Anchors can be customized to use any of the Dracula UI theme colors, including all solid, and gradients.'
      )
    ]
  }
})
