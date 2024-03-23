import React from 'react';

import SubSuperScript from './SubSuperScript';

type SubScriptProps = {
  value: React.ReactNode;
}

const SubScript: React.FC<SubScriptProps> = (props) => {
  const { value } = props;

  return (
    <SubSuperScript
      subScript={value}
      superScript={null}
    />
  );
};

export default SubScript;
