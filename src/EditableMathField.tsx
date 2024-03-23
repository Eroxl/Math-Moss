import React from 'react';

import SuperScript from './nodes/SuperScript';
import Caret from './components/Caret';
import createSidesetBigOperator from './nodes/factories/createSidesetBigOperator';
import './styles/globals.css';

const Integral = createSidesetBigOperator('∫');

const EditableMathField = () => {
  return (
    <span
      style={{
        whiteSpace: 'pre-wrap',
        fontSize: '5em',
        display: 'inline-block',
        textAlign: 'center',
      }}
    >
      <var>f(x) = </var>
      <Integral
        lowerBound={<var>a</var>}
        upperBound={<var>b</var>}
      />    
      <var>x</var>
      <SuperScript
        value={2}
      />
      <Caret />
    </span>
  )
}

export default EditableMathField;
