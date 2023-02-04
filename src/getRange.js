import { arrayError } from "./errors.js";
/**
 * The range of a set of data is the difference between the largest and smallest values,
 *  the result of subtracting the sample maximum and minimum. It is expressed in the same units as the data.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Range_(statistics))
 * @param array {Array} - Array of numbers
 * @returns {Number} Range of the given array
 **/
export default function getRange(array) {
  // Error handling
  arrayError(array);

  return Math.max(...array) - Math.min(...array);
}
