import React from 'react';
import { createRoot } from 'react-dom/client';

import EditableMathField from '../EditableMathField';
import type MathNode from '../types/MathNode';

const startingNodes: MathNode[] = [
  {
    type: 'leaf',
    args: {
      content: 'f(x)=',
    }
  },
  {
    type: 'int',
    args: {
      lowerBound: {
        type: 'leaf',
        args: {
          content: '0',
        }
      },
      upperBound: {
        type: 'fraction',
        args: {
          numerator: {
            type: 'leaf',
            args: {
              content: '1',
            }
          },
          denominator: {
            type: 'leaf',
            args: {
              content: 'x',
            }
          }
        }
      },
    }
  },
  {
    type: 'leaf',
    args: {
      content: 'x',
    }
  },
  {
    type: 'superScript',
    args: {
      value: {
        type: 'leaf',
        args: {
          content: '2',
        }
      }
    }
  },
  {
    type: 'leaf',
    args: {
      content: ' dx',
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
