import { SnapshotBuilder } from '../story-helpers/render-component';
export declare function withEntries<T>(map: T, fn: (name: keyof T, value: T[keyof T]) => SnapshotBuilder): SnapshotBuilder[];
