import getMedian from "./getMedian.js";
import { arrayError } from "./errors.js";

/**
 * The mean absolute deviation (MAD) of a data set is the average of the absolute deviations from a central point.
 * It is a summary statistic of statistical dispersion or variability.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Average_absolute_deviation)
 * @param array {Array} - Array of numbers
 * @returns {Number} Median absolute deviation of the given array
 **/
export default function getMAD(array) {
  // Error handling
  arrayError(array);

  const median = getMedian(array);
  const mapped = array.map((d) => {
    return Math.abs(d - median);
  });

  return mapped.reduce((a, b) => a + b, 0) / array.length;
}
