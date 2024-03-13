import React from 'react';

import SuperScript from './nodes/SuperScript';
import SubSuperScript from './nodes/SubSuperScript';
import SubScript from './nodes/SubScript';
import Fraction from './nodes/Fraction';
import Integral from './nodes/Integral';

import './styles/globals.css';

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
      <Integral />
      <Fraction>
        <span>
          <Integral />
          <var>x</var>
          <SubSuperScript>
              <span>
                <Integral />
                <Fraction>
                  {"1"}
                  {"2"}
                </Fraction>
              </span>
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
