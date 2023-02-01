import getPercentile from "./getPercentile.js";
/**
 * Calculates the first, middle, and third quartiles for a given array
 * @param array {Array} - Array of numbers
 * @returns {Object} First, middle, and third quartiles of the given array
 **/
export default function getQuartiles(array) {
  const quartiles = [25, 50, 75];

  const store = {};
  quartiles.forEach((quartile, i) => {
    const currQuartile = getPercentile(array, quartile);
    store[`Q${i + 1}`] = currQuartile;
  });

  return store;
}
