import React from 'react';
import styles from '../styles/Leaf.module.css';

/**
   * Italicizes variables in the content (letters like x, y, z, etc.)
   * @param content The content to italicize
   * @returns The content with variables italicized as React elements
   */
 const italicizeVariables = (
  content: string,
) => {
  const parsedText = content
    .split('')
    .map((part, index) => {
      if (/[a-zA-Z]/.test(part)) {
        return (
          <var
            key={index}
            data-index={index}
            className={part === 'f' ? styles.f : ''}
          >
            {part}
          </var>
        );
      }

    return (
      <span
        key={index}
        data-index={index}
      >
        {part}
      </span>
    )
  })

  return parsedText;
}

export default italicizeVariables;
