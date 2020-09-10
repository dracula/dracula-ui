import React from 'react'
import * as ReactDOM from 'react-dom'
import { Select } from '@/components/Select/Select'

describe('Select', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Select variant="outline" color="white" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
