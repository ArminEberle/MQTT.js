module.exports = (opts) => {
  if (opts) {
    if (opts.clientType === 'node') {
      return false
    } else if (opts.clientType === 'browser') {
      return true
    }
  }
  // eslint-disable-next-line camelcase
  return (typeof process !== 'undefined' && process.title !== 'browser') || typeof __webpack_require__ !== 'function'
}
