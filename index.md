## allKeysAndSymbols

```javascript
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
```

## in, который игнорирует свойства прототипа

```javascript
const proto = { value: 42 };
const object = Object.create(proto);

Object.defineProperty(object, "year", {
  value: 2020,
  writable: true,
  configurable: true,
  enumerable: false
});

const symbol = Symbol("bazzinga");
object[symbol] = 42;

// реализация

const handler = {
  has(target, name) {
    return target.hasOwnProperty(name);
  }
};

const proxy = new Proxy(object, handler);
```

## asyncExecutor

```javascript
function asyncExecutor(generator) {
  execute(generator());

  function execute(gen, data) {
    const { value, done } = gen.next(data);

    if (done) return;

    value.then((data) => execute(gen, data));
  }
}
```
