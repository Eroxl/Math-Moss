import React from 'react';

import styles from '../../styles/OversetBigOperator.module.css'
import commonStyles from '../../styles/Common.module.css';

type BigOperatorProps = {
  lowerBound?: React.ReactNode;
  upperBound?: React.ReactNode;
};

const createOversetBigOperator = (operator: string) => {
  const BigOperator: React.FC<BigOperatorProps> = (props) => {
    const {
      lowerBound,
      upperBound
    } = props;

    return (
      <span
        className={styles.wrapper}
      >  
        <span className={styles.upperBound}>
          {upperBound || "\u200b"}
        </span>
        <span
          className={styles.bigOperator}
        >
          {operator}
        </span>
        <span
          className={styles.lowerBound}
        >
          {lowerBound || "\u200b"}
        </span>
      </span>
    );
  };

  return BigOperator;
};

export default createOversetBigOperator;
