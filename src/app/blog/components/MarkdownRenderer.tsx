import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import type { Components } from 'react-markdown';
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

// Function to generate consistent IDs (same as your extractHeadings)
const generateId = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

interface MarkdownRendererProps {
    content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {

    const components: Components = {
        // ADD THESE HEADING COMPONENTS WITH IDs
        h1: ({ children }) => {
            if (!children) return <h1>{children}</h1>;
            const id = generateId(String(children));
            return <h1 id={id} className="scroll-mt-20">{children}</h1>;
        },
        h2: ({ children }) => {
            if (!children) return <h2>{children}</h2>;
            const id = generateId(String(children));
            return <h2 id={id} className="scroll-mt-20">{children}</h2>;
        },
        h3: ({ children }) => {
            if (!children) return <h3>{children}</h3>;
            const id = generateId(String(children));
            return <h3 id={id} className="scroll-mt-20">{children}</h3>;
        },
        h4: ({ children }) => {
            if (!children) return <h4>{children}</h4>;
            const id = generateId(String(children));
            return <h4 id={id} className="scroll-mt-20">{children}</h4>;
        },
        h5: ({ children }) => {
            if (!children) return <h5>{children}</h5>;
            const id = generateId(String(children));
            return <h5 id={id} className="scroll-mt-20">{children}</h5>;
        },
        h6: ({ children }) => {
            if (!children) return <h6>{children}</h6>;
            const id = generateId(String(children));
            return <h6 id={id} className="scroll-mt-20">{children}</h6>;
        },
        // KEEP YOUR EXISTING COMPONENTS
        code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            const isInline = !className?.includes('language-');

            return !isInline && match ? (
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code className={className} {...props}>
                        {children}
                    </code>
                </pre>
            ) : (
                <code className="bg-gray-100 px-1 py-0.5 rounded text-sm" {...props}>
                    {children}
                </code>
            );
        },
        a: ({ ...props }) => (
            <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
        ),
        img: ({ ...props }) => (
            <img className="max-w-full h-auto rounded-lg" {...props} />
        ),
    };

    return (
        <div className="prose prose-lg max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                components={components}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}