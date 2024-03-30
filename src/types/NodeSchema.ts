import type ObjectToArray from "./helpers/ObjectToArray";
import type LatexString from "./LatexString";

type NodeSchema<Renderer extends React.FC<any>> = {
  renderer: Renderer;
  accepts: {
    [key in keyof Parameters<Renderer>[0]]-?: string
  },
  latex: LatexString<ObjectToArray<NodeSchema<Renderer>['accepts']>>;
}

export default NodeSchema;