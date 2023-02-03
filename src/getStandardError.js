import getStandDev from "./getStandDev.js";
/**
 * The standard error (SE) of a statistic (usually an estimate of a parameter) is the standard deviation
 * of its sampling distribution or an estimate of that standard deviation.
 * If the statistic is the sample mean, it is called the standard error of the mean (SEM).
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Standard_error)
 * @param array {Array} - Array of numbers
 * @param {Boolean} [isSample=true] - Whether or not the data is a population or sample
 * @returns {Number} Standard error of the array
 **/

export default function getStandardError(array, isSample = true) {
  const std = getStandDev(array, (isSample = isSample));

  return std / Math.sqrt(array.length);
}
