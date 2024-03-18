import React from "react";

const Caret = () => {
  const [blink, setBlink] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        display: "inline-block",
        width: "0.025em",
        height: "1em",
        backgroundColor: blink ? "black" : "transparent",
      }}
    >
      {"\u200b"}
    </span>
  );
}

export default Caret;
