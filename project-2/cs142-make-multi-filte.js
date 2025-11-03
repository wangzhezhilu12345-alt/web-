"use strict";
function cs142makemultifilter(originalArray) {
  let currentArray = originalArray;
  function arraryFilter(filtermethod, callback) {
    if (typeof filtermethod !== "function") {
      return currentarray;
    }
    currentArray = currentArray.filter(filtermethod);
    if (typeof callback === "function") {
      callback = callback.bind(originalArray);
      callback(currentArray);
    }
    return arraryFilter;
  }
  return arraryFilter;
}
