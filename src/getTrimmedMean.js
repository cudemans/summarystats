import sort from "./sort.js";

/**
 * Calculates the trimmed mean of a given array
 * @param array {Array} - Array of numbers
 * @param trim {Number} - The number of values to remove from each end of the array
 * @returns {Number} - Trimmed mean of the given array
 **/
export default function getTrimmedMean(array, trim) {
  const copy = [...array];
  const sorted = sort(copy);

  sorted.splice(0, trim);
  sorted.splice(-trim);

  return sorted.reduce((a, b) => a + b, 0) / sorted.length;
}
