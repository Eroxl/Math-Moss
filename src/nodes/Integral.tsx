import React from 'react';

import styles from '../styles/Integral.module.css';

type IntegralProps = {
  lowerBound?: React.ReactNode;
  upperBound?: React.ReactNode;
};

const Integral: React.FC<IntegralProps> = (props) => {
  const {
    lowerBound,
    upperBound
  } = props;

  return (
    <span
      className={styles.integral}
    >  
      ∫
      <span className={styles.bounds}>
        <span className={styles.upperBound}>
          {upperBound || "\u200b"}
        </span>

        <span className={styles.lowerBound}>
          <span>
            {lowerBound || "\u200b"}
          </span>
        </span>
      </span>
    </span>
  );
};

export default Integral;
