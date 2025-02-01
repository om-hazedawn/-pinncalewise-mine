declare module 'acorn' {
  export interface Options {
    ecmaVersion?: number;
    sourceType?: 'script' | 'module';
    onComment?: Function;
    onToken?: Function;
    allowReserved?: boolean;
    allowReturnOutsideFunction?: boolean;
    allowImportExportEverywhere?: boolean;
    allowAwaitOutsideFunction?: boolean;
    allowHashBang?: boolean;
    locations?: boolean;
    ranges?: boolean;
  }

  export interface Position {
    line: number;
    column: number;
    offset: number;
  }

  export interface SourceLocation {
    start: Position;
    end: Position;
    source?: string;
  }

  export interface Node {
    type: string;
    start: number;
    end: number;
    loc?: SourceLocation;
    range?: [number, number];
  }

  export function parse(input: string, options?: Options): Node;
  export function parseExpressionAt(input: string, pos: number, options?: Options): Node;
  export function tokenizer(input: string, options?: Options): { next(): { type: any; value: string; start: number; end: number; }; };
}
