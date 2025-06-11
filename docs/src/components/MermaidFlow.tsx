import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidFlowProps {
    id: string;
    definition: string;
    config?: {
        theme?: 'default' | 'base' | 'dark' | 'forest' | 'neutral' | 'null';
        backgroundColor?: string;
    };
}

export const MermaidFlow: React.FC<MermaidFlowProps> = ({ id, definition, config }) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (elementRef.current) {
            mermaid.initialize({
                startOnLoad: true,
                theme: config?.theme || ('default' as const),
                themeVariables: {
                    background: config?.backgroundColor || '#ffffff',
                },
                securityLevel: 'loose',
                fontFamily: 'inherit',
            });

            // Clear the element before rendering
            elementRef.current.innerHTML = '';

            mermaid.render(`mermaid-${id}`, definition).then(({ svg }) => {
                if (elementRef.current) {
                    elementRef.current.innerHTML = svg;
                }
            });
        }
    }, [id, definition, config]);

    return (
        <div
            ref={elementRef}
            style={{
                margin: '2rem 0',
                padding: '1rem',
                backgroundColor: config?.backgroundColor || '#ffffff',
                borderRadius: '4px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
        />
    );
};
