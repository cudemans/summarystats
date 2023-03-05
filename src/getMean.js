import matrixArrayIterator from "./utils/matrixArrayIterator.js";
import _getMean from "./_getMean.js";

/**
 * The mean (arithmetic mean) is a measure of central tendency of a finite set of numbers: specifically,
 * the sum of the values divided by the number of values.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Mean)
 * @param data {Array} - Array of numbers
 * @param axis {Number} - Axis across which to compute (0 is rows, 1 is columns). Default is rows.
 * @returns {Number} Mean of the given array
 **/

export default function getMean(data, axis) {
  return matrixArrayIterator(data, axis, _getMean);
}
