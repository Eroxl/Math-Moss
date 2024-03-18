import React from 'react';

import SuperScript from './nodes/SuperScript';

import './styles/globals.css';
import createOversetBigOperator from './nodes/factories/createOversetBigOperator';
import Caret from './components/Caret';

const Sum = createOversetBigOperator('∑');
const Product = createOversetBigOperator('∏');

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
      <var>f(x) = x</var>
      <SuperScript>
        2
      </SuperScript>
      <Caret />
    </span>
  )
}

export default EditableMathField;
