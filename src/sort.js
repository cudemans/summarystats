/**
 * Utility function to sort an array
 * @param array {Array} - Array of numbers
 * @returns {Array} Sorted array
 **/

export default function sort(array) {
  return array.sort((a, b) => {
    return a - b;
  });
}
