import type ObjectToArray from "./helpers/ObjectToArray";
import type LatexString from "./LatexString";

type NodeSchema<Renderer extends React.FC<any>> = {
  renderer: Renderer;
  accepts: {
    [key in keyof Parameters<Renderer>[0] as key extends 'path' ? never : key]-?: {
      type: string;
      position: 'above' | 'below' | 'inline';
    }
  },
  latex: LatexString<ObjectToArray<NodeSchema<Renderer>['accepts']>>;
}

export default NodeSchema;
