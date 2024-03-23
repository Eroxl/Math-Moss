type TrimLeft<
  Str extends string,
  Char extends string = ' '
> = (
  Str extends `${Char}${infer Rest}`
    ? TrimLeft<Rest, Char>
    : Str
)
