import { arrayError, lengthError } from "./errors.js";

/**
 * In mathematics, the harmonic mean is one of several kinds of average, and in particular,
 * one of the Pythagorean means. It is sometimes appropriate for situations when the average rate is desired.
 * The harmonic mean can be expressed as the reciprocal of the arithmetic mean of the reciprocals of the given set of observations.
 * It can be calculated by dividing the number of observations by the sum of the reciprocals of all the values.
 * For example, the harmonic mean of 1, 4, 4 would be 3 / (1 / 1) + (1 / 4) + (1/ 4)
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Harmonic_mean)
 * @param array {Array} - Array of numbers
 * @returns {Number}  Harmonic mean of the array
 **/

export default function getHarmonicMean(array) {
  // Error handling
  arrayError(array);
  lengthError(array, 1);

  return array.length / array.map((d) => 1 / d).reduce((a, b) => a + b, 0);
}
