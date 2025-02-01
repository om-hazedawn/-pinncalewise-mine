declare module 'mdx' {
  import { ComponentType } from 'react';

  export interface MDXProps {
    components?: {
      [key: string]: ComponentType<any>;
    };
    [key: string]: any;
  }

  export interface MDXContent extends ComponentType<MDXProps> {
    isMDXComponent?: boolean;
  }

  export interface CompileOptions {
    remarkPlugins?: any[];
    rehypePlugins?: any[];
    filepath?: string;
    [key: string]: any;
  }

  export function compile(content: string, options?: CompileOptions): Promise<string>;
  export function run(code: string, options?: any): Promise<MDXContent>;
}
