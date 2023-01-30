import getMean from "./getMean.js";
/**
 * Calculates the variance of a given array
 * @param array {Array} - Array of numbers
 * @param {Boolean} [isSample=true] - Whether or not the data is a population or sample
 * @returns {Number} - Variance of the array
 **/
export default function getVariance(array, isSample = true) {
  const mean = getMean(array);

  const store = array.map((d) => {
    return (d - mean) ** 2;
  });

  const length = isSample ? array.length - 1 : array.length;

  return store.reduce((total, d) => total + d, 0) / length;
}
