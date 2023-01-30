import sort from "./sort.js";
/**
 * Calculates a percentile of a given array
 * @param array {Array} - Array of numbers
 * @param {Number} - Percentile to calculate
 * @returns {Number} - Percentile for the given array
 **/
export default function getPercentile(array, percentile) {
  const sorted = sort(array);

  let index =
    percentile < 1
      ? array.length * percentile
      : array.length * (percentile / 100);

  if (!Number.isInteger(index)) {
    return sorted[Math.ceil(index) - 1];
  } else {
    return (sorted[index - 1] + sorted[index]) / 2;
  }
}
