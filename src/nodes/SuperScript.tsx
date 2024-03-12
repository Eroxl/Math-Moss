import React from 'react';

type SuperScriptProps = {
  children: React.ReactNode | React.ReactNode[];
}

const SuperScript: React.FC<SuperScriptProps> = (props) => {
  const { children } = props;

  return (
    <span
      style={{
        fontSize: '0.6em',
        verticalAlign: '50%',
      }}
    >
      {children}
    </span>
  );
};

export default SuperScript;
