import getQuartiles from "./getQuartiles.js";
/**
 * The interquartile range (IQR) is a measure of statistical dispersion, which is the spread of the data.
 * It is defined as the difference between the 75th and 25th percentiles of the data.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Interquartile_range)
 * @alias getInterQuartileRange
 * @param array {Array} - Array of numbers
 * @returns {Number} Inter-quartile range of the given array
 **/
export default function getIQR(array) {
  const quartiles = getQuartiles(array);

  return quartiles["Q3"] - quartiles["Q1"];
}
