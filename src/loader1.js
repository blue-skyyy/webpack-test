module.exports = function (source) {
  const callback = this.async();
  setTimeout(() => {
    let s = source.replace(/green/g, "blue");
    callback(null, s);
  }, 3000);
};
