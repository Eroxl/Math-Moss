import React from 'react';

import styles from '../styles/SubSuperScript.module.css';
import commonStyles from '../styles/Common.module.css';

type SubSuperScriptProps = {
  children: [React.ReactNode, React.ReactNode];
}

const SubSuperScript: React.FC<SubSuperScriptProps> = (props) => {
  const { children } = props;

  const [superScriptElement, subScriptElement] = children;

  return (
    <span className={styles.wrapper}>
      <span className={styles.superScript}>
        {superScriptElement}
      </span>

      <span className={styles.subScript}>
        {subScriptElement}
      </span>

      <span className={commonStyles.aligner}>
        {"\u200b"}
      </span>
    </span>
  );
};

export default SubSuperScript;
