import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface BlogMarkdown {
  children: string
}

export default function BlogMarkdown({ children }: BlogMarkdown) {
  return (
    <ReactMarkdown
    // options={{
    //   overrides: {
    //     Code: {
    //       component: Code
    //     }
    //   }
    // }}
    >
      {children}
    </ReactMarkdown>
  )
}