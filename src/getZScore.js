import getMean from "./getMean.js";
import getStandDev from "./getStandDev.js";
/**
 * Calculates the z-score of a particular value
 * @param value {Number} - A value for which to calculate the z-score
 * @param array {Array} - Array in which the value appears
 * @returns {Number} Z-score
 **/

export default function getZScore(value, array, isSample = true) {
  return (value - getMean(array)) / getStandDev(array, (isSample = isSample));
}
