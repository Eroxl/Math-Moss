import React from 'react';

import styles from '../styles/Fraction.module.css';
import commonStyles from '../styles/Common.module.css';

type FractionProps = {
  children: [React.ReactNode, React.ReactNode];
}

const Fraction: React.FC<FractionProps> = (props) => {
  return (
    <span className={styles.fraction}>
      <span className={styles.numerator}>
        {props.children[0]}
      </span>

      <span className={styles.denominator}>
        {props.children[1]}
      </span>

      <span className={commonStyles.aligner}>
        {"\u200b"}
      </span>
    </span>
  )
};

export default Fraction;
