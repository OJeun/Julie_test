AudioParamMap.prototype.forEach = function(callback, thisArg) {
  var map = this;
  Object.keys(map).forEach(function(key) {
    callback.call(thisArg, map[key], key, map);
  });
}