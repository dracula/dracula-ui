import testRenderer from 'react-test-renderer'

export type ComponentExample = {
  code: ReturnType<testRenderer.ReactTestRenderer['toJSON']>
  docs: string
  title: string
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
  comp: React.ReactElement,
  docs: string = ''
): ComponentExample {
  const rendered = testRenderer.create(comp)
  const code = rendered.toJSON()
  return {
    title,
    code,
    docs
  }
}
