import React from 'react';

import SubSuperScript from './SubSuperScript';

type SubScriptProps = {
  children: React.ReactNode | React.ReactNode[];
}

const SubScript: React.FC<SubScriptProps> = (props) => {
  const { children } = props;

  return (
    <SubSuperScript>
      <span />
      <span>
        {children}
      </span>
    </SubSuperScript>
  );
};

export default SubScript;
