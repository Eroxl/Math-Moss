import React from 'react';

import SuperScript from './nodes/SuperScript';
import SubSuperScript from './nodes/SubSuperScript';
import SubScript from './nodes/SubScript';
import Fraction from './nodes/Fraction';

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
      <span>
        <var>x</var>
        <SubSuperScript>
            {"2"}
            {"2"}
        </SubSuperScript>
        + <var>x</var>
        <SuperScript>
          2
        </SuperScript>
        + <var>x</var>
        <SubScript>
          2
        </SubScript>
      </span>
    </span>
  )
}

export default EditableMathField;
