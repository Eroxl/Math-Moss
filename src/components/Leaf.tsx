import React, { useCallback } from 'react';

import styles from '../styles/Leaf.module.css';
import CaretContext from '../contexts/CaretContext';
import Caret from './Caret';
import getCaretSide from '../lib/getCaretSide';
import italicizeVariables from '../lib/italicizeVariables';

type LeafProps = {
  content?: string;
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
  const isEmpty = !content || content === '';
  const isArgument = Number.isNaN(+path.split('.').slice(-1)[0]);
  
  const handleCaretClick: React.MouseEventHandler<HTMLSpanElement> = useCallback((event) => {
    if (!setCaretState) return;

    const caretSide = getCaretSide(event);

    if (!event.target || !(event.target instanceof HTMLElement)) return;

    const offset = +(event.target.dataset.index || 0) + (caretSide === 'right' ? 1 : 0);

    setCaretState({
      offset,
      path
    });
  }, [setCaretState, path]);

  if (isEmpty && !isCaretVisible && isArgument) {
    return (
      <span
        onClick={handleCaretClick}
        className={styles.placeholder}
      >
        {" "}
      </span>
    )
  }

  const children = italicizeVariables(content || '');

  children.splice(
    caretState?.offset || 0,
    0,
    isCaretVisible ? <Caret key="caret" /> : <></>
  );

  return (
    <span
      onClick={handleCaretClick}
    >
      {
        children
      }
    </span>
  );
};

export default Leaf;
