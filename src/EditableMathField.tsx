import React from 'react';

import type MathNode from './types/MathNode';

import './styles/globals.css';
import renderMathNode from './lib/renderMathNode';

type EditableMathFieldProps = {
  startingState?: (MathNode | string)[];
};

const EditableMathField: React.FC<EditableMathFieldProps> = (props) => {
  const {
    startingState
  } = props;

  return (
    <span
      style={{
        whiteSpace: 'pre-wrap',
        fontSize: '5em',
        display: 'inline-block',
        textAlign: 'center',
      }}
    >
      {
        startingState?.map(renderMathNode)
      }
    </span>
  )
}

export default EditableMathField;
