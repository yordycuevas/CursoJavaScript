"use strict";

// Arithmetic median
// const list1 = [100, 200, 300, 500];
function calculateArithmeticmedian(list) {
  /* 
      let sumList = 0;
  
  for (let i = 0; i < list.length; i++) {
    sumList = sumList + list[i];
  }
   */
  var sumList = list.reduce(function () {
    var accumulatedValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var newElement = arguments.length > 1 ? arguments[1] : undefined;
    return accumulatedValue + newElement;
  });
  var medianList = sumList / list.length;
  return medianList;
} // Arithmetic median