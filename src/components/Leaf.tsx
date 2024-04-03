import React from 'react';

import styles from '../styles/Leaf.module.css';
import CaretContext from '../contexts/CaretContext';
import Caret from './Caret';
import getCaretSide from '../lib/getCaretSide';

type LeafProps = {
  content: string;
  path: string;
};

const Leaf: React.FC<LeafProps> = (props) => {
  const {
    content,
    path
  } = props;

  const {
    caretState,
    setCaretState
  } = React.useContext(CaretContext);

  const isCaretVisible = caretState?.path === path;

  /**
   * Italicizes variables in the content (letters like x, y, z, etc.)
   * @param content The content to italicize
   * @returns The content with variables italicized as React elements
   */
 const italizeVariables = (content: string) => {
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

    parsedText.splice(
      caretState?.offset || 0,
      0,
      isCaretVisible ? <Caret key="caret" /> : <></>
    )

    return parsedText;
  }

  return (
    <span
      onClick={(event) => {
        if (!setCaretState) return;

        const caretSide = getCaretSide(event);

        if (!event.target || !(event.target instanceof HTMLElement)) return;

        const offset = +(event.target.dataset.index || 0) + (caretSide === 'right' ? 1 : 0);

        console.log('Clicked on leaf', offset, path);

        setCaretState({
          offset,
          path
        });
      }}
    >
      {italizeVariables(content)}
    </span>
  );
};

export default Leaf;
