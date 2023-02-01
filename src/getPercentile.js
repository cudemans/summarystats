import sort from "./sort.js";
import { arrayError, lengthError } from "./errors.js";
/**
 * A k-th percentile is a score below which a given percentage k of scores in its frequency distribution
 * falls (exclusive definition) or a score at or below which a given percentage falls (inclusive definition).
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Percentile)
 * @param array {Array} - Array of numbers
 * @param {Number} - Percentile to calculate
 * @returns {Number} Percentile for the given array
 **/
export default function getPercentile(array, percentile) {
  // Error handling
  arrayError(array);
  lengthError(array, 2);

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
