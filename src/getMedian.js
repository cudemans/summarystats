import matrixArrayIterator from "./utils/matrixArrayIterator.js";
import _getMedian from "./_getMedian.js";

/**
 * The median is the value separating the higher half from the lower half of a data sample,
 * a population, or a probability distribution. For a data set,
 * it may be thought of as "the middle" value.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Median)
 * @param data {Array} - Array of numbers
 * @params axis {Number} - Axis across which to compute (0 is rows, 1 is columns). Default is rows.
 * @returns {Number} Median of the given array
 **/

export default function getMedian(data, axis) {
  return matrixArrayIterator(data, axis, _getMedian);
}
