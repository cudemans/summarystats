// HELPER FUNCTIONS
function sort(array) {
  return array.sort((a, b) => {
    return a - b;
  });
}

// END HELPER FUNCTIONS

/**
 * Calculates the mean of a given array
 * @param array {Array} - Array of numbers
 * @returns {Number} - Mean of the given array
 **/
function getMean(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

/**
 * Calculates the trimmed mean of a given array
 * @param array {Array} - Array of numbers
 * @param trim {Number} - The number of values to remove from each end of the array
 * @returns {Number} - Trimmed mean of the given array
 **/
function getTrimmedMean(array, trim) {
  const copy = [...array];
  const sorted = sort(copy);

  sorted.splice(0, trim);
  sorted.splice(-trim);

  return sorted.reduce((a, b) => a + b, 0) / sorted.length;
}

/**
 * Calculates the median of a given array
 * @param array {Array} - Array of numbers
 * @returns {Number} - Median of the given array
 **/
function getMedian(array) {
  const sorted = sort(array);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Calculates the mode of a given array
 * @param array {Array} - Array of numbers
 * @returns {Number} - Mode of the given array
 **/
function getMode(array) {
  const counts = {};
  array.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });
  const max = Math.max(...Object.values(counts));
  const mode = Object.keys(counts).filter((key) => counts[key] === max);
  return mode.length === 1 ? mode[0] : mode;
}

/**
 * Calculates the variance of a given array
 * @param array {Array} - Array of numbers
 * @param {Boolean} [isSample=true] - Whether or not the data is a population or sample
 * @returns {Number} - Variance of the array
 **/
function getVariance(array, isSample = true) {
  const mean = getMean(array);

  const store = array.map((d) => {
    return (d - mean) ** 2;
  });

  const length = isSample ? array.length - 1 : array.length;

  return store.reduce((total, d) => total + d, 0) / length;
}

/**
 * Calculates the standard variation of a given array
 * @param array {Array} - Array of numbers
 * @param {Boolean} [isSample=true] - Whether or not the data is a population or sample
 * @returns {Number} - Standard deviation of the array
 **/
function getStandDev(array, isSample = true) {
  return Math.sqrt(getVariance(array, (isSample = isSample)));
}

/**
 * Calculates a percentile of a given array
 * @param array {Array} - Array of numbers
 * @param {Number} - Percentile to calculate
 * @returns {Number} - Percentile for the given array
 **/
function getPercentile(array, percentile) {
  const sorted = sort(array);

  let index =
    percentile < 1
      ? array.length * percentile
      : array.length * (percentile / 100);

  if (!Number.isInteger(index)) {
    return sorted[Math.ceil(index) - 1];
  } else {
    return (sorted[index - 1] + sorted[index]) / 2;
  }
}

/**
 * Calculates the first, middle, and third quartiles for a given array
 * @param array {Array} - Array of numbers
 * @returns {Object} - First, middle, and third quartiles of the given array
 **/
function getQuartiles(array) {
  const quartiles = [25, 50, 75];

  const store = {};
  quartiles.forEach((quartile, i) => {
    const currQuartile = getPercentile(array, quartile);
    store[`Q${i + 1}`] = currQuartile;
  });

  return store;
}

/**
 * Calculates the range for a given array
 * @param array {Array} - Array of numbers
 * @returns {Number} - Range of the given array
 **/
function getRange(array) {
  return Math.max(...array) - Math.min(...array);
}

/**
 * Calculates the inter-quartile range of a given array
 * @param array {Array} - Array of numbers
 * @returns {Number} - Inter-quartile range of the given array
 **/
function getIQR(array) {
  const quartiles = getQuartiles(array);

  return quartiles["Q3"] - quartiles["Q1"];
}

/**
 * Calculates the coefficient of variation of a given array
 * @param array {Array} - Array of numbers
 * @param {Boolean} [isSample=true] - Whether or not the data is a population or sample
 * @returns {String} - Coefficient of variation of a given array
 **/
function getCoV(array, isSample = true) {
  const mean = getMean(array);
  const std = getStandDev(array, (isSample = isSample));

  return `${((std / mean) * 100).toFixed(2)}%`;
}

/**
 * Calculates the mean absolute deviation of a given array
 * @param array {Array} - Array of numbers
 * @returns {Number} - Mean absolute deviation of the given array
 **/
function getMAD(array) {
  const median = getMedian(array);

  const mapped = array.map((d) => {
    return Math.abs(d - median);
  });

  return mapped.reduce((a, b) => a + b, 0) / array.length;
}

module.exports = {
  getMean,
  getTrimmedMean,
  getMedian,
  getMode,
  getVariance,
  getStandDev,
  getPercentile,
  getQuartiles,
  getRange,
  getCoV,
  getMAD,
  getIQR,
};
