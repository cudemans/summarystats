import getMean from "./getMean.js";
import getStandDev from "./getStandDev.js";
/**
 * The z-score is the number of standard deviations by which the value of an observed value value
 * is above or below the mean value of what is being observed or measured.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Standard_score)
 * @param value {Number} - A value for which to calculate the z-score
 * @param array {Array} - Array in which the value appears
 * @returns {Number} Z-score
 **/

export default function getZScore(value, array, isSample = true) {
  return (value - getMean(array)) / getStandDev(array, (isSample = isSample));
}
