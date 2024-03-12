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
      margin: '0 0.15em',
    }}>
      {/* Denominator */}
      <span style={{
        display: 'block',
        textAlign: "center",
        width: "100%",
      }}>
        {props.children[0]}
      </span>

      {/* Fraction Line */}
      <hr
        style={{
          width: "100%",
          border: "0.03em solid black",
          margin: "0 -0.15em",
          textAlign: "center",
          padding: "0px 0.15em",
        }}
      />

      {/* Numerator */}
      <span style={{
        display: 'block',
        float: 'right',
        textAlign: "center",
        width: "100%",
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
