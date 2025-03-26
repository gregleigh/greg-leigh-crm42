'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import MJML components to avoid SSR issues
const MjmlEditor = ({ initialValue, onChange }) => {
  const [mjmlContent, setMjmlContent] = useState(initialValue);
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setMjmlContent(newValue);
    onChange(newValue);
  };
  
  return (
    <div className="mjml-editor">
      <textarea
        className="w-full h-96 p-3 font-mono text-sm"
        value={mjmlContent}
        onChange={handleChange}
      />
    </div>
  );
};

export default MjmlEditor;
