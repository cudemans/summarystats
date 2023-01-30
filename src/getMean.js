/**
 * Calculates the mean of a given array
 * @param array {Array} - Array of numbers
 * @returns {Number} - Mean of the given array
 **/
export default function getMean(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
