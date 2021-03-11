import { SnapshotBuilder } from '../story-helpers/render-component';
import React from 'react';
interface Documentation {
    basicUsage: () => SnapshotBuilder;
    variations: () => Array<SnapshotBuilder>;
}
export declare function siteDocs<T>(componentClass: React.FunctionComponent<T>, documentation: Documentation): void;
export {};
