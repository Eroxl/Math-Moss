const typeSafeFromEntries = <T extends Record<string, any>>(
  entries: [keyof T, T[keyof T]][]
): T => (
  Object.fromEntries(entries) as T
);

export default typeSafeFromEntries;