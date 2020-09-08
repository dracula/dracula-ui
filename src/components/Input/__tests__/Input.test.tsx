import React from 'react'
import * as ReactDOM from 'react-dom'
import { Input } from '../Input'

describe('Input', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Input variant="outline" color="white" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
