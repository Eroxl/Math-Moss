import React from 'react';

type SubSuperScriptProps = {
  children: [React.ReactNode, React.ReactNode];
}

const SubSuperScript: React.FC<SubSuperScriptProps> = (props) => {
  const { children } = props;

  const [superScriptElement, subScriptElement] = children;

  return (
    <span
      style={{
        display: 'inline-block',
        position: 'relative',
        verticalAlign: '-0.55em',
        textAlign: 'center',
        fontSize: '0.6em',
      }}
    >
      <span
        style={{
          display: 'block',
          textAlign: "center",
          width: "100%",
        }}
      >
        {superScriptElement}
      </span>
      <span
        style={{
          display: 'block',
          float: 'right',
          textAlign: "center",
          width: "100%",
        }}
      >
        {subScriptElement}
      </span>


      {/* Zero Width Space Character For Alignment */}
      <span
        style={{
          display: "inline-block",
          width: "0px",
        }}
      >
        {"\u200b"}
      </span>
    </span>
  );
};

export default SubSuperScript;
