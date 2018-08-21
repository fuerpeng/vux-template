export function isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}

export function isNumber (val) {
  return /^[0-9]+[1-9]*]*$/.test(val);
}
