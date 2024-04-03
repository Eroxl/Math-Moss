import MathNode, { LeafNode } from "../types/MathNode";
import type { CaretState } from "../contexts/CaretContext";

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
  const { path: leafPath } = caretState;

  const [index, ...pathParts] = leafPath.split('.');

  const stateClone = [...state];

  const getLeaf = (node: MathNode, pathParts: string[]): MathNode => {
    if (pathParts.length === 0) {
      return node;
    }

    const argKey = pathParts.shift();

    return getLeaf(node.args[(argKey!) as keyof typeof node.args], pathParts);
  }

  const startingNode = stateClone[+index];

  if (pathParts.length === 0) {
    if (startingNode.type !== 'leaf') return [stateClone, caretState];

    startingNode.args.content = getNewContent(startingNode, newText, caretState, deleteCount);
    return [stateClone, {
      offset: Math.max(0, caretState.offset + newText.length - deleteCount),
      path: leafPath,
    }];
  }

  const leaf = getLeaf(startingNode, pathParts);

  if (leaf.type !== 'leaf') return [stateClone, caretState];

  leaf.args.content = getNewContent(leaf, newText, caretState, deleteCount);

  return [stateClone, {
    offset: Math.max(0, caretState.offset + newText.length - deleteCount),
    path: leafPath,
  }];
};

export default updateLeaf;