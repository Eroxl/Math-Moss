import createSidesetBigOperator from "../../nodes/factories/createSidesetBigOperator";
import createSetBigOperatorsSchema from "../createSetBigOperatorsSchema";

const sidesetBigOperatorsCharacters = [
  {
    character: '∫',
    latex: '\\int',
  },
  {
    character: '∬',
    latex: '\\iint',
  },
  {
    character: '∭',
    latex: '\\iiint',
  },
  {
    character: '⨌',
    latex: '\\iiiint',
  },
  {
    character: '∮',
    latex: '\\oint',
  },
  {
    character: '∯',
    latex: '\\oiint',
  },
  {
    character: '∰',
    latex: '\\oiiint',
  }
] as const;

const sidesetBigOperators = createSetBigOperatorsSchema(
  createSidesetBigOperator,
  sidesetBigOperatorsCharacters
);

export default sidesetBigOperators;

