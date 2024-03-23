import React from 'react';

import styles from '../../styles/SidesetBigOperator.module.css';

type SidesetBigOperatorProps = {
  lowerBound?: React.ReactNode;
  upperBound?: React.ReactNode;
};

const createSidesetBigOperator = (operator: string) => {
  const SideSetBigOperator: React.FC<SidesetBigOperatorProps> = (props) => {
    const {
      lowerBound,
      upperBound
    } = props;

    return (
      <span
        className={styles.wrapper}
      >  
        {operator}
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

  return SideSetBigOperator;
};

export default createSidesetBigOperator;
