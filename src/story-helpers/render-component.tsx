import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { pretty } from './pretty'

Enzyme.configure({ adapter: new Adapter() })

export type ComponentExample = {
  html: string
  docs: string
  title: string
  react?: any
  screenshot?: string
  svgData?: string
}

export type SnapshotBuilder = {
  comp: () => React.ReactElement
  docs: string
  title: string
}

export function buildSnapshot(
  title: string,
  comp: () => React.ReactElement,
  docs: string = ''
): SnapshotBuilder {
  return {
    title,
    comp,
    docs: docs.trim()
  }
}

export function renderSnapshot(
  title: string,
  comp: () => React.ReactElement,
  docs: string = ''
): ComponentExample {
  let component = comp()
  const html = mount(component).html()
  let wrapped = false

  // wrap the component in a div when it's not wrapped already
  // we do this so we can get the actual component example to not be shallow rendered.
  // Shallow rendering a parent "div" gives us a nice JSX representation of the example.
  if (component.type !== 'div') {
    component = <div>{component}</div>
    wrapped = true
  }

  let react = shallow(component).debug({ verbose: true })

  if (wrapped) {
    // replace wrapper div 😬
    react = react
      .replace(/^<div>\n/, '')
      .replace(/\n<\/div>$/, '')
      .trim()
  }

  return {
    title,
    html: pretty(html, 'html'),
    react: pretty(react, 'typescript'),
    docs
  }
}
