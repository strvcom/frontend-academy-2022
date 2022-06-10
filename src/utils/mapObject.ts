/**
 * Maps through an object's properties.
 *
 * i.e.:
 * mapObject({ foo: '' }, (value, key) => key) // { foo: 'foo' }
 * mapObject({ foo: 1, bar: 3 }, (value) => value + 1) // { foo: 2, bar; 4 }
 */
const mapObject = <
  TObject extends object,
  TKeys extends keyof TObject,
  TResult
>(
  obj: TObject,
  fn: (value: TObject[keyof TObject], key: TKeys, obj: TObject) => TResult
) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      fn(value, key as TKeys, obj),
    ])
  ) as { [key in TKeys]: TResult }

export { mapObject }
