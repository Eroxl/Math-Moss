import React from 'react';

import nodeSchemas from './constants/nodeSchemas';
import MathNode from '../types/MathNode';

const renderMathNode = (node: MathNode | string) => {
  if (typeof node === 'string') {
    // ~ Don't italicize numbers
    if (/^\d+$/.test(node)) {
      return (
        <span>
          {node}
        </span>
      );
    }

    return (
      <var>
        {node}
      </var>
    );
  }

  if (
    node.type === 'leaf'
    || node.type === undefined
  ) {
    return <span>{"\u200b"}</span>;
  }

  const { 
    renderer: Renderer
  } = nodeSchemas[node.type];

  const subNodes = Object.fromEntries(
    Object.entries(node.args).map(([key, value]) => {
      return [
        key,
        renderMathNode(value as MathNode)
      ]
    })
  );

  return (
    <Renderer
      {...subNodes as any}
    />
  )
};

export default renderMathNode;