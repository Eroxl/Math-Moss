import React from 'react';
import { createRoot } from 'react-dom/client';

import EditableMathField from '../EditableMathField';

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
      <EditableMathField />
    </div>
  );
}

const root = createRoot(document.getElementById('root')!);

root.render(<App />);
