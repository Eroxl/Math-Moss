import { Entries } from "hotscript/dist/internals/objects/impl/objects";
import nodeSchemas from "../lib/constants/nodeSchemas";
import { Pipe, Unions, Fn, Call } from "hotscript";

interface MathNodeMap extends Fn {
  return: this['arg0'] extends [infer Key, infer Value] 
    ? {
      type: Key;
      args: Value extends { accepts: infer U }
        ? {
          [key in keyof U]: _GeneralMathNode | string;
        }
        : never
    }
    : never
}

type _GeneralMathNode = {
  type: keyof typeof nodeSchemas;
  args: {
    [key: string]: _GeneralMathNode | string;
  }
}

type MathNode = (
  Call<
    Unions.Map<
      MathNodeMap
    >,
    Entries<typeof nodeSchemas>
  >
  | {
    type: 'leaf';
  }
);

export default MathNode;
