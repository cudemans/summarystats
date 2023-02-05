/**
 * Utility function to sum an array
 * @param array {Array} - Array of numbers
 * @returns {Number} Summed array
 **/

export default function sum(array) {
  return array.reduce((a, b) => a + b, 0);
}
