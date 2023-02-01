import sort from "./sort.js";
import { arrayError } from "./errors.js";
/**
 * the median is the value separating the higher half from the lower half of a data sample,
 * a population, or a probability distribution. For a data set,
 * it may be thought of as "the middle" value.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Median)
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
