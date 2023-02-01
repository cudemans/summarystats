import getVariance from "./getVariance.js";
/**
 * Calculates the standard variation of a given array
 * @alias getStandardDeviation
 * @param array {Array} - Array of numbers
 * @param {Boolean} [isSample=true] - Whether or not the data is a population or sample
 * @returns {Number} Standard deviation of the array
 **/
export default function getStandDev(array, isSample = true) {
  return Math.sqrt(getVariance(array, (isSample = isSample)));
}
