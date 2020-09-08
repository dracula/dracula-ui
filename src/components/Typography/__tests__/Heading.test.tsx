import React from 'react'
import * as ReactDOM from 'react-dom'
import { Heading } from '../Heading'

describe('Heading', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Heading size="heading-1" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
