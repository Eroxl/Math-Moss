import React from 'react';

import styles from '../styles/Fraction.module.css';
import commonStyles from '../styles/Common.module.css';

type FractionProps = {
  denominator: React.ReactNode;
  numerator: React.ReactNode;
}

const Fraction: React.FC<FractionProps> = (props) => {
  const {
    denominator,
    numerator,
  } = props;

  return (
    <span className={styles.fraction}>
      <span className={styles.numerator}>
        {numerator}
      </span>

      <span className={styles.denominator}>
        {denominator}
      </span>

      <span className={commonStyles.aligner}>
        {"\u200b"}
      </span>
    </span>
  )
};

export default Fraction;
