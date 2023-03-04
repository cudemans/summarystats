/**
 * Utility function to abstract selected statistical function to n-dimensional data
 * @param data {Array} - N-dimensional array
 * @param axis {Number} - Axis over which to compute the statistical function (0 for rows, 1 for columns)
 * @param statFn {Function} - Statistical function
 * @returns {Array} N-dimensional array containing results of computation
 **/

export default function matrixArrayIterator(data, axis, statFn) {
  const rows = data.length;
  const cols = data[0].length;
  const stats = [];

  if (cols == undefined) {
    return statFn(data);
  }

  if (axis === 0 || !axis) {
    for (let i = 0; i < rows; i++) {
      let values = [];
      for (let j = 0; j < cols; j++) {
        values.push(data[i][j]);
      }
      stats.push(statFn(values));
    }
  } else if (axis === 1) {
    for (let i = 0; i < cols; i++) {
      let values = [];
      for (let j = 0; j < rows; j++) {
        values.push(data[j][i]);
      }
      stats.push(statFn(values));
    }
  } else {
    throw new Error("Invalid axis value");
  }

  return stats;
}
