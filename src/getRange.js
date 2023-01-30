/**
 * Calculates the range for a given array
 * @param array {Array} - Array of numbers
 * @returns {Number} - Range of the given array
 **/
export default function getRange(array) {
  return Math.max(...array) - Math.min(...array);
}
