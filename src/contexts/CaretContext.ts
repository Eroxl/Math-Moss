import { createContext } from "react";

export type CaretState = {
  path: string,
  offset: number,
}

type CaretContextProps = {
  caretState?: CaretState,
  setCaretState?: (caretState: CaretState) => void,
};

const CaretContext = createContext<CaretContextProps>({ });

export default CaretContext;
