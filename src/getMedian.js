import sort from "./sort.js";
import { arrayError } from "./errors.js";
/**
 * Calculates the median of a given array
 * @param array {Array} - Array of numbers
 * @returns {Number} Median of the given array
 **/
export default function getMedian(array) {
  // Error handling
  arrayError(array);

  const sorted = sort(array);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}
