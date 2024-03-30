import React from 'react';
import { createRoot } from 'react-dom/client';

import EditableMathField from '../EditableMathField';
import type MathNode from '../types/MathNode';

const startingNodes: (MathNode | string)[] = [
  "f(x)=",
  {
    type: 'int',
    args: {
      lowerBound: '0',
      upperBound: '1',
    }
  },
  "x",
  {
    type: 'superScript',
    args: {
      value: '2'
    }
  }
]

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <EditableMathField
        startingState={startingNodes}
      />
    </div>
  );
}

const root = createRoot(document.getElementById('root')!);

root.render(<App />);
