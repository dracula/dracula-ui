import React from 'react'
import * as ReactDOM from 'react-dom'
import { Switch } from '@/components/Switch/Switch'

describe('Switch', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Switch color="white" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
