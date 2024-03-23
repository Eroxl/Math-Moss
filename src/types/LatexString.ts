type LatexArgs<
  Args extends any[],
  Acc extends unknown[] = [1]
> = (
  [1, ...Args]['length'] extends Acc['length']
    ? ''
    : `{${Acc['length']}}${string}${LatexArgs<Args, [ ...Acc, any ]>}`
)

type LatexString<
  Args extends any[]
> = (
  `${string}${LatexArgs<Args>}`
)

export default LatexString;
