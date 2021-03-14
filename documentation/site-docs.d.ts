import { SnapshotBuilder } from './render-component';
import React from 'react';
interface Documentation {
    basic: () => SnapshotBuilder;
    variations: () => Array<SnapshotBuilder> | SnapshotBuilder;
}
export declare function docs<T>(componentClass: React.FunctionComponent<T>, documentation: Documentation): void;
export {};
