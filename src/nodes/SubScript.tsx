import React from 'react';

type SubScriptProps = {
  children: React.ReactNode | React.ReactNode[];
}

const SubScript: React.FC<SubScriptProps> = (props) => {
  const { children } = props;

  return (
    <span
      style={{
        fontSize: '0.6em',
        verticalAlign: '-50%',
      }}
    >
      {children}
    </span>
  );
};

export default SubScript;
