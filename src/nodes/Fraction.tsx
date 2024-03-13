import React from 'react';

type FractionProps = {
  children: [React.ReactNode, React.ReactNode];
}

const Fraction: React.FC<FractionProps> = (props) => {
  return (
    <span style={{
      display: 'inline-block',
      position: 'relative',
      verticalAlign: '-0.55em',
      textAlign: 'center',
      fontSize: '80%',
    }}>
      {/* Numerator */}
      <span style={{
        display: 'block',
        textAlign: "center",
        width: "100%",
        padding: '0 0.2em',
      }}>
        {props.children[0]}
      </span>

      {/* Denominator */}
      <span style={{
        display: 'block',
        float: 'right',
        textAlign: "center",
        width: "100%",
        borderTop: "0.06em solid black",
        padding: '0 0.2em',
      }}>
        {props.children[1]}
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
  )
};

export default Fraction;
