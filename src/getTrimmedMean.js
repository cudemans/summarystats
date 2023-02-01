import sort from "./sort.js";
import { arrayError, lengthError } from "./errors.js";

/**
 * Calculates the trimmed mean of a given array
 * @param array {Array} - Array of numbers
 * @param trim {Number} - The number of values to remove from each end of the array
 * @returns {Number} Trimmed mean of the given array
 **/
export default function getTrimmedMean(array, trim) {
  // Error handling
  arrayError(array);
  lengthError(array, trim * 2 + 2);

  const copy = [...array];
  const sorted = sort(copy);

  sorted.splice(0, trim);
  sorted.splice(-trim);

  return sorted.reduce((a, b) => a + b, 0) / sorted.length;
}
