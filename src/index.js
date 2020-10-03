
exports.min = function min (array) {
  if (array === undefined) {
    return 0;
    } else if (array.length  ==0) {
    return 0;
    }
  let minArr = Math.min.apply(null, array);
  return minArr;
  
}


exports.max = function max (array) {
  if (array === undefined) {
    return 0;
    } else if (array.length  ==0) {
    return 0;
    }
   return Math.max.apply(null, array);
  
};

exports.avg = function avg (array) {
  if (array === undefined) {
    return 0;
    } else if (array.length  ==0) {
    return 0;
    } 
  let sum = (array).reduce((a, b) => a + b, 0);
  let result = sum / (array).length;
  return result
  };

  
