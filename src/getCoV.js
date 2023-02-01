import getMean from "./getMean.js";
import getStandDev from "./getStandDev.js";
import { arrayError, lengthError } from "./errors.js";
/**
 * The coefficient of variation s a standardized measure of dispersion of a probability distribution or frequency distribution.
 * It is often expressed as a percentage, and is defined as the ratio of the standard deviation to the mean.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Coefficient_of_variation)
 * @alias getCoefficientOfVariation
 * @param array {Array} - Array of numbers
 * @param {Boolean} [isSample=true] - Whether or not the data is a population or sample
 * @returns {String} Coefficient of variation of a given array
 **/
export default function getCoV(array, isSample = true) {
  // Error handling
  arrayError(array);
  lengthError(array, 2);

  const mean = getMean(array);
  const std = getStandDev(array, (isSample = isSample));

  return `${((std / mean) * 100).toFixed(2)}%`;
}
