import React from 'react'
import * as ReactDOM from 'react-dom'
import { Box } from '@/components/Color/Box'

describe('Box', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Box color="white" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
