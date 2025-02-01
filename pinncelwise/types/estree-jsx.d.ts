declare module 'estree-jsx' {
  import * as ESTree from 'estree'

  export interface BaseNode extends ESTree.Node {
    type: string;
    loc?: ESTree.SourceLocation | null;
    range?: [number, number];
  }

  export interface JSXIdentifier extends BaseNode {
    type: 'JSXIdentifier';
    name: string;
  }

  export interface JSXMemberExpression extends BaseNode {
    type: 'JSXMemberExpression';
    object: JSXIdentifier | JSXMemberExpression;
    property: JSXIdentifier;
  }

  export interface JSXNamespacedName extends BaseNode {
    type: 'JSXNamespacedName';
    namespace: JSXIdentifier;
    name: JSXIdentifier;
  }

  export type JSXElementName = JSXIdentifier | JSXMemberExpression | JSXNamespacedName;

  export interface JSXAttribute extends BaseNode {
    type: 'JSXAttribute';
    name: JSXIdentifier | JSXNamespacedName;
    value: ESTree.Expression | JSXElement | null;
  }

  export interface JSXSpreadAttribute extends BaseNode {
    type: 'JSXSpreadAttribute';
    argument: ESTree.Expression;
  }

  export type JSXAttribute_t = JSXAttribute | JSXSpreadAttribute;

  export interface JSXElement extends BaseNode {
    type: 'JSXElement';
    openingElement: JSXOpeningElement;
    children: Array<JSXElement | JSXText>;
    closingElement: JSXClosingElement | null;
  }

  export interface JSXOpeningElement extends BaseNode {
    type: 'JSXOpeningElement';
    name: JSXElementName;
    attributes: Array<JSXAttribute_t>;
    selfClosing: boolean;
  }

  export interface JSXClosingElement extends BaseNode {
    type: 'JSXClosingElement';
    name: JSXElementName;
  }

  export interface JSXText extends BaseNode {
    type: 'JSXText';
    value: string;
    raw: string;
  }
}
