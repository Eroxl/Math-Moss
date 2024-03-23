import Fraction from "../../nodes/Fraction";
import SubScript from "../../nodes/SubScript";
import SuperScript from "../../nodes/SuperScript";
import SubSuperScript from "../../nodes/SubSuperScript";
import ObjectToArray from "../../types/helpers/ObjectToArray";
import type NodeSchema from "../../types/NodeSchema";
import type LatexString from "../../types/LatexString";
import oversetBigOperators from "./oversetBigOperators";
import sidesetBigOperators from "./sidesetBigOperators";

const createNodeSchema = <
  Renderer extends React.FC<any>
>(
  renderer: Renderer,
  accepts: NodeSchema<Renderer>['accepts'],
  latex: LatexString<ObjectToArray<NodeSchema<Renderer>['accepts']>>
): NodeSchema<Renderer> => (
  {
    renderer,
    accepts,
    latex,
  }
);

const nodeSchemas = {
  fraction: createNodeSchema(
    Fraction,
    {
      numerator: 'node',
      denominator: 'node',
    },
    '\\frac{1}{2}'
  ),
  subScript: createNodeSchema(
    SubScript,
    {
      value: 'node',
    },
    '_{1}'
  ),
  superScript: createNodeSchema(
    SuperScript,
    {
      value: 'node',
    },
    '^{1}'
  ),
  subSuperScript: createNodeSchema(
    SubSuperScript,
    {
      superScript: 'node',
      subScript: 'node',
    },
    '^{1}_{2}'
  ),
  ...oversetBigOperators,
  ...sidesetBigOperators,
} satisfies Record<string, NodeSchema<React.FC<any>>>

export default nodeSchemas;
