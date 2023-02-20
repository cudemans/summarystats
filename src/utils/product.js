/**
 * Utility function to calculate the product of an array
 * @param array {Array} - Array of numbers
 * @returns {Array} Product of an array
 **/

export default function product(array) {
  return array.reduce((a, b) => a * b, 1);
}
