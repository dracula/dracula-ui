import React from 'react'
import * as ReactDOM from 'react-dom'
import { Divider } from '../Divider'

describe('Divider', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Divider color="white" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
