import { Entries } from "hotscript/dist/internals/objects/impl/objects";
import nodeSchemas from "../lib/constants/nodeSchemas";
import { Unions, Fn, Call } from "hotscript";

interface MathNodeMap extends Fn {
  return: this['arg0'] extends [infer Key, infer Value] 
    ? {
      type: Key;
      args: Value extends { accepts: infer U }
        ? {
          [key in keyof U]?: _GeneralMathNode | string;
        }
        : never
    }
    : never
}

export type LeafNode = {
  type: 'leaf';
  args: {
    content: string;
  }
}

type _GeneralMathNode = {
  type: keyof Omit<typeof nodeSchemas, 'leaf'>;
  args: {
    [key: string]: _GeneralMathNode;
  }
} | LeafNode

type MathNode = (
  Call<
    Unions.Map<
      MathNodeMap
    >,
    Entries<Omit<typeof nodeSchemas, 'leaf'>>
  >
) | LeafNode;

export default MathNode;
