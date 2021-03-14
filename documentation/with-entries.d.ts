import { SnapshotBuilder } from './render-component';
export declare function withEntries<T>(map: T, fn: (name: keyof T, value: T[keyof T]) => SnapshotBuilder): SnapshotBuilder[];
