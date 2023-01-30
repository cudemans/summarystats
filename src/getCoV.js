import getMean from "./getMean.js";
import getStandDev from "./getStandDev.js";
/**
 * Calculates the coefficient of variation of a given array
 * @param array {Array} - Array of numbers
 * @param {Boolean} [isSample=true] - Whether or not the data is a population or sample
 * @returns {String} - Coefficient of variation of a given array
 **/
export default function getCoV(array, isSample = true) {
  const mean = getMean(array);
  const std = getStandDev(array, (isSample = isSample));

  return `${((std / mean) * 100).toFixed(2)}%`;
}
