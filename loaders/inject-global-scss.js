module.exports = function(source) {
  this.cacheable();
  return `@import './src/assets/styles/globals';
    ${source}`;
}
