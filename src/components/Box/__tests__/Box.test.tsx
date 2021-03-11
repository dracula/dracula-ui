import { Box } from '@/components/Box/Box'
import React from 'react'
import * as ReactDOM from 'react-dom'
import { siteDocs } from '../../../documentation/site-docs'
import {
  buildSnapshot,
  SnapshotBuilder
} from '../../../story-helpers/render-component'

describe('Box', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Box is="button" color="white" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

siteDocs(Box, {
  basicUsage() {
    return buildSnapshot('Usage', () => <Box color="purple">Dracula</Box>)
  },
  variations() {
    return [
      buildSnapshot('Colors', () => <Box color="pinkPurple">Pink Purple</Box>),
      buildSnapshot('Generic Elements', () => (
        <div>
          <Box is="button" color="pinkPurple">
            Button
          </Box>

          <Box is="a" color="green" href="#">
            Link
          </Box>
        </div>
      ))
    ] as SnapshotBuilder[]
  }
})
