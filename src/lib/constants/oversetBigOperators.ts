import createOversetBigOperator from "../../nodes/factories/createOversetBigOperator";
import createSetBigOperatorsSchema from "../createSetBigOperatorsSchema";

const oversetBigOperatorsCharacters = [
  {
    character: "∑",
    latex: "\\sum",
  },
  {
    character: "∏",
    latex: "\\prod",
  },
  {
    character: "∐",
    latex: "\\coprod",
  }
] as const;

const oversetBigOperators = createSetBigOperatorsSchema(
  createOversetBigOperator,
  oversetBigOperatorsCharacters
);

export default oversetBigOperators;
