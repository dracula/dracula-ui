import { SnapshotBuilder } from '../story-helpers/render-component'

export function withEntries<T>(
  map: T,
  fn: (name: keyof T, value: T[keyof T]) => SnapshotBuilder
) {
  return Object.entries(map).map(([name, value]) => {
    return fn(name as keyof T, value as T[keyof T])
  })
}
