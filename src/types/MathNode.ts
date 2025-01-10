import { Entries } from "hotscript/dist/internals/objects/impl/objects";
import nodeSchemas from "../lib/constants/nodeSchemas";
import { Unions, Fn, Call } from "hotscript";

interface MathNodeMap extends Fn {
  return: this['arg0'] extends [infer Key, infer Value] 
    ? {
      type: Key;
      args: Value extends { accepts: infer U }
        ? {
          [key in keyof U]?: MathNode;
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

type MathNode = (
  Call<
    Unions.Map<
      MathNodeMap
    >,
    Entries<Omit<typeof nodeSchemas, 'leaf'>>
  >
) | LeafNode;

export default MathNode;
