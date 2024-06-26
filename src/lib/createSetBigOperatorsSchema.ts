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
          (latex.replace('\\', '')) as TrimLeft<T[number]['latex'], '\\'>,
          {
            renderer: renderer(character),
            accepts: {
              lowerBound: {
                type: 'subScript',
                position: 'below',
              },
              upperBound: {
                type: 'superScript',
                position: 'above',
              }
            },
            latex: `${latex}_{lowerBound}^{upperBound}`,
            bind: `\\${latex}`
          }
        ]
      )
    )
)

export default createSetBigOperatorsSchema;