import sort from "./utils/sort.js";
import sum from "./utils/sum.js";
import { arrayError, lengthError } from "./errors.js";

/**
 *  The trimmed mean is a statistical measure of central tendency, much like the mean and median.
 * It involves the calculation of the mean after discarding given parts of a probability distribution
 * or sample at the high and low end, and typically discarding an equal amount of both.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Truncated_mean)
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

  return sum(sorted) / sorted.length;
}
