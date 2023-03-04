import sum from "./utils/sum.js";
import { arrayError, lengthError } from "./errors.js";

/**
 * The mean (arithmetic mean) is a measure of central tendency of a finite set of numbers: specifically,
 * the sum of the values divided by the number of values.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Mean)
 * @param array {Array} - Array of numbers
 * @returns {Number} Mean of the given array
 **/
export default function _getMean(array) {
  // Error handling
  arrayError(array);
  lengthError(array, 1);

  return sum(array) / array.length;
}
