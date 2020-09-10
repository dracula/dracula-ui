import React from 'react'
import * as ReactDOM from 'react-dom'
import { Radio } from '@/components/Radio/Radio'

describe('Radio', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Radio color="white" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
