import {
  getGeometricMean,
  getMean,
  getVariance,
  getWeightedMean,
} from "./index.js";

const array = [3, 4, 5, 6, 7, 8, 9];
const weights = [1, 1, 1, 1, 1, 0.5, 0.5];

console.log(getWeightedMean(array, weights));
