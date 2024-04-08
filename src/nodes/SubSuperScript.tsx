import React from 'react';

import styles from '../styles/SubSuperScript.module.css';
import commonStyles from '../styles/Common.module.css';

type SubSuperScriptProps = {
  superScript: React.ReactNode;
  subScript: React.ReactNode;
}

const SubSuperScript: React.FC<SubSuperScriptProps> = (props) => {
  const { 
    subScript,
    superScript
   } = props;

  return (
    <span
      className={styles.wrapper}
      style={subScript
        ? undefined
        : {
          marginBottom: "-0.55em"
        }
      }
    >
      <span className={styles.superScript}>
        {superScript}
      </span>

      {
        subScript && (
          <span className={styles.subScript}>
            {subScript}
          </span>
        )
      }

      <span className={commonStyles.aligner}>
        {"\u200b"}
      </span>
    </span>
  );
};

export default SubSuperScript;
