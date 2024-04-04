import React, { useEffect, useRef } from 'react';

import type MathNode from './types/MathNode';
import type { CaretState } from './contexts/CaretContext';
import renderMathNode from './lib/renderMathNode';
import CaretContext from './contexts/CaretContext';
import './styles/globals.css';
import updateLeaf from './lib/updateLeaf';
import copyHandler from './lib/copyHandler';

type EditableMathFieldProps = {
  startingState?: MathNode[];
};

const EditableMathField: React.FC<EditableMathFieldProps> = (props) => {
  const {
    startingState
  } = props;

  const editorRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [state, setState] =  React.useState<MathNode[]>(startingState || []);

  const [caretState, setCaretState] = React.useState<undefined | CaretState>({
    offset: 0,
    path: '1.upperBound'
  });

  useEffect(() => {
    document.addEventListener('copy', copyHandler);

    return () => {
      document.removeEventListener('copy', copyHandler);
    };
  }, []);

  useEffect(() => {    
    const handleSelectionChange = (e: Event) => {
      if (!editorRef.current || !inputRef.current) return;

      const element = document.activeElement;

      if (
        editorRef.current.contains(element)
        || inputRef.current.contains(element)
      ) return;

      setCaretState(undefined);
    };

    document.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        !caretState
        || !inputRef.current
      ) return;

      if (!inputRef.current.contains(document.activeElement)) return;

      if (e.key !== 'Backspace') return;

      e.preventDefault();

      const [newState, newCaretState] = updateLeaf(
        '',
        state,
        caretState,
        1
      );

      setState(newState);
      setCaretState(newCaretState);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [caretState, state]);

  return (
    <CaretContext.Provider
      value={{
        caretState,
        setCaretState: (state: CaretState) => {
          setCaretState(state);

          if (!inputRef.current) return;

          inputRef.current.focus();
        },
      }}
    >
      <input
        ref={inputRef}
        type='text'
        style={{
          position: 'absolute',
          top: -1,
          opacity: 0,
        }}
        onInput={(e) => {
          const value = (e.target as HTMLInputElement).value;

          (e.target as HTMLInputElement).value = '';

          if (!caretState) return;

          const [newState, newCaretState] = updateLeaf(
            value,
            state,
            caretState
          );

          setState(newState);
          setCaretState(newCaretState);
        }}
      />
      <span
        style={{
          whiteSpace: 'pre-wrap',
          fontSize: '5em',
          display: 'inline-block',
          textAlign: 'center',
        }}
        ref={editorRef}
      >
        {
          state.map((node, index) => renderMathNode(node, `${index}`))
        }
      </span>
    </CaretContext.Provider>
  )
}

export default EditableMathField;
