(function (root, factory) {
  if (typeof exports === 'object') {
      module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
      define(factory);
  } else {
      root.qw = factory();
  }
}(this, function () {
  return qw;

  function qw(str){
    return str.replace(/(^\s+|\s+$)/g,'').split(/\s+/g)
  }
}))
