import getVariance from "./getVariance.js";
/**
 * the standard deviation is a measure of the amount of variation or dispersion of a set of values.
 * A low standard deviation indicates that the values tend to be close to the mean of the set,
 * while a high standard deviation indicates that the values are spread out over a wider range.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Standard_deviation)
 * @alias getStandardDeviation
 * @param array {Array} - Array of numbers
 * @param {Boolean} [isSample=true] - Whether or not the data is a population or sample
 * @returns {Number} Standard deviation of the array
 **/
export default function getStandDev(array, isSample = true) {
  return Math.sqrt(getVariance(array, (isSample = isSample)));
}
