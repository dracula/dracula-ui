import React from 'react'
import * as ReactDOM from 'react-dom'
import { Checkbox } from '../Checkbox'

describe('Checkbox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Checkbox color="white" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
