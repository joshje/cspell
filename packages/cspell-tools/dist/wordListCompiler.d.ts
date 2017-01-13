/// <reference types="node" />
import * as Rx from 'rx';
import * as fs from 'fs';
import { Sequence } from 'gensequence';
export declare function normalizeWords(lines: Rx.Observable<string>): Rx.Observable<string>;
export declare function lineToWords(line: string): Sequence<string>;
export declare function compileSetOfWords(lines: Rx.Observable<string>): Promise<Set<string>>;
export declare function compileWordList(filename: string, destFilename: string): Promise<fs.WriteStream>;
