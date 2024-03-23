import NodeSchema from "../types/NodeSchema";
import typeSafeFromEntries from "../types/helpers/typeSafeFromEntries";

const createSetBigOperatorsSchema = <
  T extends Readonly<{ character: string, latex: string }[]>,
>(
  renderer: (char: string) => React.FC<{ lowerBound: React.ReactNode, upperBound: React.ReactNode }>,
  operators: T,
): Record<
  TrimLeft<T[number]['latex'], '\\'>,
  NodeSchema<ReturnType<typeof renderer>>
> => typeSafeFromEntries(
  operators
    .map(
      ({ character, latex }) => (
        [
          latex as TrimLeft<T[number]['latex'], '\\'>,
          {
            renderer: renderer(character),
            accepts: {
              lowerBound: 'node',
              upperBound: 'node',
            },
            latex: `${latex}_{1}^{2}`,
          }
        ]
      )
    )
)

export default createSetBigOperatorsSchema;