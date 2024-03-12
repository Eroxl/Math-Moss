import React from 'react';

import SubSuperScript from './SubSuperScript';

type SuperScriptProps = {
  children: React.ReactNode | React.ReactNode[];
}

const SuperScript: React.FC<SuperScriptProps> = (props) => {
  const { children } = props;

  return (
    <SubSuperScript>
      <span>
        {children}
      </span>
      <span></span>
    </SubSuperScript>
  )
};

export default SuperScript;
