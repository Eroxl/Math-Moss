import MathNode, { LeafNode } from "../types/MathNode";
import type { CaretState } from "../contexts/CaretContext";
import checkForNewNodes from "./checkForNewNodes";
import nodeSchemas from "./constants/nodeSchemas";

const getNewContent = (
  leaf: LeafNode,
  addedText: string,
  caretState: CaretState,
  deleteCount: number = 0,
) => {
  const { offset } = caretState;
  const { content } = leaf.args

  const newContent = content.slice(0, offset - deleteCount) + addedText + content.slice(offset);

  return newContent;
};

/**
 * Update a leaf node in the state by its path.
 * @param newText The new text to add to the leaf node.
 * @param state The current state.
 * @param caretState The current caret state.
 * @param deleteCount The number of characters to delete.
 * @returns The updated state.
 */
const updateLeaf = (
  newText: string,
  state: MathNode[],
  caretState: CaretState,
  deleteCount: number = 0,
): [MathNode[], CaretState] => {
  let { path: leafPath } = caretState;

  const [index, ...pathParts] = leafPath.split('.');

  const stateClone = [...state];

  const getLeaf = (node: MathNode, pathParts: string[]): MathNode => {
    if (pathParts.length === 0) {
      return node;
    }

    const argKey = pathParts.shift();

    return getLeaf(node.args[(argKey!) as keyof typeof node.args], pathParts);
  }

  const endNode = getLeaf(stateClone[+index], pathParts)

  if (endNode.type !== 'leaf') return [stateClone, caretState];

  endNode.args.content = getNewContent(endNode, newText, caretState, deleteCount);

  const newNodes = checkForNewNodes(endNode.args.content);

  if (newNodes) {
   (endNode.type as any) = 'group';

    (endNode.args as any) = Object.fromEntries(
      newNodes.map((node, i) => [
        i,
        node,
      ])
    );

    caretState.offset = -newText.length - 1;
    leafPath = `${leafPath}.1.${Object.keys(nodeSchemas[newNodes[1].type].accepts)[0]}`;

    console.log(leafPath);
  }

  return [
    stateClone,
    {
      offset: Math.max(0, caretState.offset + newText.length - deleteCount),
      path: leafPath,
    }
  ];
};

export default updateLeaf;