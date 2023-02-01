import { arrayError, lengthError } from "./errors.js";
import getMean from "./getMean.js";
/**
 * Variance is the expectation of the squared deviation of a random variable from its
 * population mean or sample mean. Variance is a measure of dispersion, meaning it is a measure
 * of how far a set of numbers is spread out from their average value.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Variance)
 * @param array {Array} - Array of numbers
 * @param {Boolean} [isSample=true] - Whether or not the data is a population or sample
 * @returns {Number} Variance of the array
 **/
export default function getVariance(array, isSample = true) {
  // Error handing
  arrayError(array);
  lengthError(array, 2);

  const mean = getMean(array);
  const store = array.map((d) => {
    return (d - mean) ** 2;
  });

  const length = isSample ? array.length - 1 : array.length;

  return store.reduce((total, d) => total + d, 0) / length;
}
