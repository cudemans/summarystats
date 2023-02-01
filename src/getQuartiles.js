import getPercentile from "./getPercentile.js";
/**
 *  a quartile is a type of quantile which divides the number of data points into four parts,
 *  or quarters, of more-or-less equal size. The data must be ordered from smallest to largest
 * to compute quartiles; as such, quartiles are a form of order statistic.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Quartile)
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
