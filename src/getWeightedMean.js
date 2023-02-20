import { arrayError, arrayEqualError } from "./errors.js";
import sum from "./utils/sum.js";

export default function getWeightedMean(array, weights) {
  // Error handling
  Object.keys(arguments).forEach((d, i) => {
    arrayError(arguments[i]);
  });
  arrayEqualError(array, weights);

  const weightProducts = array.map((d, i) => d * weights[i]);

  return sum(weightProducts) / sum(weights);
}
