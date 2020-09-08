import React from 'react'
import { Heading } from '../Heading'
import testRenderer from 'react-test-renderer'

describe('Heading', () => {
  it('heading-1', () => {
    const rendered = testRenderer.create(
      <Heading size="heading-1">Hello World</Heading>
    )
    expect(rendered.toJSON()).toMatchSnapshot()
  })

  it('heading-2', () => {
    const rendered = testRenderer.create(
      <Heading size="heading-2">Hello World</Heading>
    )
    expect(rendered.toJSON()).toMatchSnapshot()
  })

  it('heading-3', () => {
    const rendered = testRenderer.create(
      <Heading size="heading-3">Hello World</Heading>
    )
    expect(rendered.toJSON()).toMatchSnapshot()
  })

  it('heading-4', () => {
    const rendered = testRenderer.create(
      <Heading size="heading-4">Hello World</Heading>
    )
    expect(rendered.toJSON()).toMatchSnapshot()
  })
})
