import React from 'react'
import { Link } from '@/components/Link/Link'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Link, {
  basic() {
    return snapshot(
      'Usage',
      () => <Link href="#">link</Link>,
      'Link is an abstraction/style that can/is applied to HTML anchor elements.'
    )
  },
  variations() {
    return [
      snapshot(
        'Sizes',
        () => (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link href="#" size="xsmall">
              xsmall
            </Link>
            <Link href="#" size="small">
              small
            </Link>
            <Link href="#" size="medium">
              medium
            </Link>
            <Link href="#" size="large">
              large
            </Link>
            <Link href="#" style={{ fontSize: 30 }}>
              font-size: 30
            </Link>
          </div>
        ),
        'Link sizes can be customized with pre defined sizes or using regular HTML styles or CSS classes.'
      ),
      snapshot(
        'Colors',
        () => (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link href="#" color="pink" hoverColor="purple" m="sm">
              pink / purple
            </Link>

            <Link href="#" color="cyanGreen" hoverColor="yellowPink" m="sm">
              cyanGreen / yellowPink
            </Link>
          </div>
        ),
        'Links can be customized to use any of the Dracula UI theme colors, including all solid, and gradients.'
      )
    ]
  }
})
