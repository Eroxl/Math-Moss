import React from 'react';

import nodeSchemas from './constants/nodeSchemas';
import MathNode from '../types/MathNode';

const renderMathNode = (
  node: MathNode,
  path: string = '',
) => {
  const { 
    renderer: Renderer
  } = nodeSchemas[node.type];

  const subNodeEntries = Object
    .entries(node.args)
    .map(([key, value]) => ([
      key,
      node.type === 'leaf'
        ? value
        : renderMathNode(
          value as MathNode,
          `${path}.${key}`
        )
    ]));
  
  const subNodes = Object.fromEntries(subNodeEntries);

  return (
    <Renderer
      {...subNodes}
      path={path}
    />
  )
};

export default renderMathNode;