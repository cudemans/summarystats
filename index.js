// HELPER FUNCTIONS
function sort(array) {
  return array.sort((a, b) => {
    return a - b;
  });
}

// END HELPER FUNCTIONS

function getMean(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

function getTrimmedMean(array, trim) {
  const copy = [...array];
  const sorted = sort(copy);

  sorted.splice(0, trim);
  sorted.splice(-trim);

  return sorted.reduce((a, b) => a + b, 0) / sorted.length;
}

function getMedian(array) {
  const sorted = sort(array);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

function getMode(array) {
  const counts = {};
  array.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });
  const max = Math.max(...Object.values(counts));
  const mode = Object.keys(counts).filter((key) => counts[key] === max);
  return mode.length === 1 ? mode[0] : mode;
}

function getVariance(array, isSample = true) {
  const mean = getMean(array);

  const store = array.map((d) => {
    return (d - mean) ** 2;
  });

  const length = isSample ? array.length - 1 : array.length;

  return store.reduce((total, d) => total + d, 0) / length;
}

function getStandDev(array, isSample = true) {
  return Math.sqrt(getVariance(array, (isSample = isSample)));
}

function getPercentile(array, percentile) {
  const sorted = sort(array);

  const index = array.length * percentile;

  if (!Number.isInteger(index)) {
    return sorted[Math.ceil(index) - 1];
  } else {
    return (sorted[index - 1] + sorted[index]) / 2;
  }
}

module.exports = {
  getMean,
  getTrimmedMean,
  getMedian,
  getMode,
  getVariance,
  getStandDev,
  getPercentile,
};
