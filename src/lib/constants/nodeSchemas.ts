import Fraction from "../../nodes/Fraction";
import SubScript from "../../nodes/SubScript";
import SuperScript from "../../nodes/SuperScript";
import SubSuperScript from "../../nodes/SubSuperScript";
import ObjectToArray from "../../types/helpers/ObjectToArray";
import type NodeSchema from "../../types/NodeSchema";
import type LatexString from "../../types/LatexString";
import oversetBigOperators from "./oversetBigOperators";
import sidesetBigOperators from "./sidesetBigOperators";
import Leaf from "../../components/Leaf";
import Group from "../../components/Group";

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
  leaf: createNodeSchema(
    Leaf,
    {
      content: {
        type: 'string',
        position: 'inline',
      }
    },
    '{content}'
  ),
  group: createNodeSchema(
    Group,
    {},
    '{}'
  ),
  fraction: createNodeSchema(
    Fraction,
    {
      numerator: {
        type: '*',
        position: 'above',
      },
      denominator: {
        type: '*',
        position: 'below',
      }
    },
    '\\frac{numerator}{denominator}'
  ),
  subScript: createNodeSchema(
    SubScript,
    {
      value: {
        type: '*',
        position: 'below',
      }
    },
    '_{value}'
  ),
  superScript: createNodeSchema(
    SuperScript,
    {
      value: {
        type: '*',
        position: 'above',
      }
    },
    '^{value}'
  ),
  subSuperScript: createNodeSchema(
    SubSuperScript,
    {
      superScript: {
        type: 'superScript',
        position: 'above',
      },
      subScript: {
        type: 'subScript',
        position: 'below',
      }
    },
    '^{superScript}_{subScript}'
  ),
  ...oversetBigOperators,
  ...sidesetBigOperators,
} satisfies Record<string, NodeSchema<React.FC<any>>>

export default nodeSchemas;
