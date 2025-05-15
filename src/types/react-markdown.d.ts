declare module 'react-markdown' {
  import { ComponentType, ReactNode } from 'react';
  
  interface MarkdownProps {
    children: string;
    className?: string;
    components?: Record<string, ComponentType<any>>;
  }
  
  const Markdown: ComponentType<MarkdownProps>;
  export default Markdown;
} 