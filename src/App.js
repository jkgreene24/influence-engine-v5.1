import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const InfluenceEngine = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleProcess = () => {
    const logicMapping = {
      'hesitating': 'Catalyst → Momentum is driven forward with sharper clarity.',
      'navigate': 'Navigator → Provides structured clarity and alignment.',
      'resistance': 'Diplomat → Harmonizes and reduces tension with smooth transitions.',
      'optimism': 'Connector → Builds deeper relational trust and accelerates alignment.',
      'skepticism': 'Anchor → Grounds the conversation with precision and authority.'
    };

    let result = 'No matching influence path found.';
    Object.keys(logicMapping).forEach(key => {
      if (input.toLowerCase().includes(key)) {
        result = logicMapping[key];
      }
    });

    if (input.toLowerCase().includes('high stakes')) {
      result = 'Anchor Logic → Stabilizing the conversation for clarity and control.';
    }

    if (input.toLowerCase().includes('multi-party')) {
      result = 'Multi-Party Logic → Anchoring to highest authority and self-correcting drift.';
    }

    if (input.toLowerCase().includes('breadcrumb recovery')) {
      result = 'Breadcrumb Recovery Logic → Returning to the last known stable state.';
    }

    setOutput(result);
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <Card className="w-full max-w-md mb-5">
        <CardContent>
          <input 
            type="text" 
            placeholder="Enter your query..." 
            value={input} 
            onChange={handleInputChange} 
            className="w-full p-2 border rounded"
          />
        </CardContent>
      </Card>

      <Button onClick={handleProcess} className="mb-5">Process</Button>

      {output && (
        <Card className="w-full max-w-md">
          <CardContent>
            <p>{output}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default InfluenceEngine;
