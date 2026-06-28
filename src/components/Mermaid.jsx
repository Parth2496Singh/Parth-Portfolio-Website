import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  themeVariables: {
    primaryColor: '#a855f7',
    primaryTextColor: '#fff',
    primaryBorderColor: '#9333ea',
    lineColor: '#c084fc',
    secondaryColor: '#f3e8ff',
    tertiaryColor: '#fff',
  }
});

export const Mermaid = ({ chart }) => {
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const renderChart = async () => {
      try {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvg(svg);
        setError(false);
      } catch (e) {
        console.error('Mermaid rendering failed', e);
        setError(true);
      }
    };
    renderChart();
  }, [chart]);

  if (error) {
    return <div className="p-4 bg-red-50 text-red-500 rounded-lg text-sm border border-red-100">Failed to render architecture diagram.</div>;
  }

  return (
    <div 
      className="mermaid-container w-full overflow-x-auto flex justify-center p-6 bg-white dark:bg-[#111827] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
};
