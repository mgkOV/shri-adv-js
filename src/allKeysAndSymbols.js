function allKeysAndSymbols(obj) {
  let keys = [];
  const isObject = (typeof obj === "object" || typeof obj === "function") && obj !== null;

  if (!isObject) return keys;

  const proto = Object.getPrototypeOf(obj);
  allKeys = keys.concat(
    Object.getOwnPropertyNames(obj),
    Object.getOwnPropertySymbols(obj),
    allKeysAndSymbols(proto)
  );

  return [...new Set(allKeys)];
}
