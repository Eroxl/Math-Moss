import { Unions, Fn, Call, Strings } from "hotscript";

interface NameToArg extends Fn {
  return: `{${this['arg0']}}`
}

type LatexArgs<
  Args extends string
> = (
  Call<
    Unions.Map<NameToArg>,
    Args
  >
)

type LatexString<
  Args extends any[]
> = (
  Call<
    Strings.Repeat<Args['length']>,
    `${string}${LatexArgs<Args[number][0]>}`
  >
)

export default LatexString;
