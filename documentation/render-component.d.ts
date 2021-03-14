import React from 'react';
export declare type ComponentExample = {
    html: string;
    docs: string;
    title: string;
    react?: any;
    screenshot?: string;
    svgData?: string;
};
export declare type SnapshotBuilder = {
    comp: () => React.ReactElement;
    docs: string;
    title: string;
};
export declare function snapshot(title: string, comp: () => React.ReactElement, docs?: string): SnapshotBuilder;
export declare function renderSnapshot(title: string, comp: () => React.ReactElement, docs?: string): ComponentExample;
