export { default as getMean } from "./getMean.js";
export { default as getTrimmedMean } from "./getTrimmedMean.js";
export { default as getHarmonicMean } from "./getHarmonicMean.js";
export { default as getGeometricMean } from "./getGeometricMean.js";
export { default as getWeightedMean } from "./getWeightedMean.js";
export { default as getMedian } from "./getMedian.js";
export { default as getMode } from "./getMode.js";
export { default as getVariance } from "./getVariance.js";
export {
  default as getStandDev,
  default as getStandardDeviation,
} from "./getStandDev.js";
export { default as getPercentile } from "./getPercentile.js";
export { default as getQuartiles } from "./getQuartiles.js";
export { default as getRange } from "./getRange.js";
export {
  default as getIQR,
  default as getInterQuartileRange,
} from "./getIQR.js";
export {
  default as getCoV,
  default as getCoefficientOfVariation,
} from "./getCoV.js";
export {
  default as getMAD,
  default as getMeanAbsoluteDeviation,
} from "./getMAD.js";
export {
  default as getCorrCoeff,
  default as getCorrelationCoefficient,
} from "./getCorrCoeff.js";
export { default as getZScore } from "./getZScore.js";
export { default as getStandardError } from "./getStandardError.js";
export { default as getSkewness } from "./getSkewness.js";
export { default as getKurtosis } from "./getKurtosis.js";

// Utility functions
export { default as matrixArrayIterator } from "./utils/matrixArrayIterator.js";

// Export stats object
import getMean from "./getMean.js";
import getTrimmedMean from "./getTrimmedMean.js";
import getHarmonicMean from "./getHarmonicMean.js";
import getGeometricMean from "./getGeometricMean.js";
import getWeightedMean from "./getWeightedMean.js";
import getMedian from "./getMedian.js";
import getMode from "./getMode.js";
import getVariance from "./getVariance.js";
import getStandDev from "./getStandDev.js";
import getPercentile from "./getPercentile.js";
import getQuartiles from "./getQuartiles.js";
import getRange from "./getRange.js";
import getIQR from "./getIQR.js";
import getCoV from "./getCoV.js";
import getMAD from "./getMAD.js";
import getCorrCoeff from "./getCorrCoeff.js";
import getZScore from "./getZScore.js";
import getStandardError from "./getStandardError.js";
import getKurtosis from "./getKurtosis.js";
import getSkewness from "./getSkewness.js";
import matrixArrayIterator from "./utils/matrixArrayIterator.js";

const stats = {
  getMean,
  getTrimmedMean,
  getHarmonicMean,
  getGeometricMean,
  getWeightedMean,
  getMedian,
  getMode,
  getVariance,
  getStandDev,
  getPercentile,
  getQuartiles,
  getRange,
  getIQR,
  getCoV,
  getMAD,
  getCorrCoeff,
  getZScore,
  getStandardError,
  getKurtosis,
  getSkewness,
  matrixArrayIterator,
};

export default stats;
