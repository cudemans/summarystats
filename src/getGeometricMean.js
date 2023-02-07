import { checkNegativesError, arrayError } from "./errors.js";

/**
 * The geometric mean is a mean or average which indicates a central tendency of a set of numbers
 * by using the product of their values (as opposed to the arithmetic mean which uses their sum).
 * The geometric mean is defined as the nth root of the product of n numbers.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Geometric_mean)
 * @param array {Array} - Array of numbers
 * @returns {Number}  Harmonic mean of the array
 **/

export default function getGeometricMean(array) {
  // Error handling
  array.forEach((d) => checkNegativesError(d));
  arrayError(array);

  const product = array.reduce((a, b) => a * b, 1);

  return Math.pow(product, 1 / array.length);
}
