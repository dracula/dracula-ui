import * as dg from 'react-docgen-typescript';
import { ComponentExample } from '../render-component';
declare type Component = {
    class: 'component';
    type: string;
    id: string;
    name: string;
    last_updated_by: string;
    description: string;
    tags: string[];
    related_entity_ids: string[];
    snippets: {
        trigger: string;
        languages: Record<string, string>;
    };
    ext_com_draculaui_variations: ComponentExample[];
    ext_com_draculaui_props: dg.ComponentDoc['props'];
    ext_com_draculaui_docgen?: dg.ComponentDoc;
};
export declare function toDSP(name: string, usage: Record<string, ComponentExample>, docs?: dg.ComponentDoc): Component;
export {};
