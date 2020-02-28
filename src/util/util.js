export const isArray = value => Array.isArray(value);
export const isNumber = v => typeof v === 'number';

export const noop = () => {};

export const omitBy = (obj, predicate) =>
  Object.entries(obj).reduce((result, [key, value]) => {
    if (!predicate(value, key)) {
      result[key] = value;
    }

    return result;
  }, {});

export const omit = (obj, keys) =>
  omitBy(obj, (value, key) => keys.includes(key));
