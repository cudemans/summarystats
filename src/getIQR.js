import getQuartiles from "./getQuartiles.js";
/**
 * Calculates the inter-quartile range of a given array
 * @param array {Array} - Array of numbers
 * @returns {Number} - Inter-quartile range of the given array
 **/
export default function getIQR(array) {
  const quartiles = getQuartiles(array);

  return quartiles["Q3"] - quartiles["Q1"];
}
