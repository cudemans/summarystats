import getMedian from "./getMedian.js";

/**
 * Calculates the median absolute deviation of a given array
 * @param array {Array} - Array of numbers
 * @returns {Number} - Median absolute deviation of the given array
 **/
export default function getMAD(array) {
  const median = getMedian(array);

  const mapped = array.map((d) => {
    return Math.abs(d - median);
  });

  return mapped.reduce((a, b) => a + b, 0) / array.length;
}
