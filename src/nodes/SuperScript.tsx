import React from 'react';

import SubSuperScript from './SubSuperScript';

type SuperScriptProps = {
  value: React.ReactNode;
}

const SuperScript: React.FC<SuperScriptProps> = (props) => {
  const { value } = props;

  return (
    <SubSuperScript
      subScript={null}
      superScript={value}
    />
  );
};

export default SuperScript;
