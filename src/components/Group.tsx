import React from 'react';

type GroupProps = {
  [key: string]: React.ReactNode;
}

const Group: React.FC<GroupProps> = (props) => {
  return (
    <span
      style={{
        whiteSpace: 'pre-wrap',
        display: 'inline-block',
        textAlign: 'center',
      }}
    >
      {Object
        .entries(props)
        .filter(([key]) => !isNaN(Number(key)))
        .map(([_, value]) => value)
      }
    </span>
  );
};

export default Group;
