import puppeteer from 'puppeteer';
import { ComponentExample, SnapshotBuilder } from '../../story-helpers/render-component';
export declare function componentScreenshot(browser: puppeteer.Browser, snapshot: ComponentExample, variation: SnapshotBuilder | null, name: string): Promise<[string, string | undefined]>;
