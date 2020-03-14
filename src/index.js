
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!arguments.length) return [];
    let arr = [];
    matrix.map((val, i) => {
        if (i % 2 === 0)
            matrix.push.apply(arr, val);
        else
            matrix.push.apply(arr, val.reverse());
    });
    return arr;
  }
