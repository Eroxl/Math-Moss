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
      <var>f(x) = </var>
      <Fraction>
        <span>
          <var>x</var>
          <SubSuperScript>
              <Fraction>
                {"1"}
                {"2"}
              </Fraction>
              {"2"}
          </SubSuperScript>
          + <var>x</var>
          <SuperScript>
            <Fraction>
              {"1"}
              {"2"}
            </Fraction>
          </SuperScript>
          + <var>x</var>
          <SubScript>
            2
          </SubScript>
        </span>
        {"2"}
      </Fraction>
    </span>
  )
}

export default EditableMathField;
