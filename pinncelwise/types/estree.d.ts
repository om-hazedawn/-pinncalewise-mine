declare module 'estree' {
  export interface Node {
    type: string;
    loc?: SourceLocation | null;
    range?: [number, number];
  }

  export interface SourceLocation {
    source?: string | null;
    start: Position;
    end: Position;
  }

  export interface Position {
    line: number;
    column: number;
  }

  export interface Program extends Node {
    type: 'Program';
    body: Array<Statement | ModuleDeclaration>;
    sourceType: 'script' | 'module';
  }

  export interface Statement extends Node { }
  export interface ModuleDeclaration extends Node { }
  export interface Expression extends Node { }
  export interface Pattern extends Node { }
}
