import { arrayError } from "./errors.js";
import { getMean, getStandDev } from "./index.js";
import sum from "./utils/sum.js";

export default function getSkewness(array) {
  // Error handling
  arrayError(array);

  const median = getMean(array);
  const std = getStandDev(array);

  const num = array.map((d) => {
    return ((d - median) / std) ** 3;
  });

  const den = 1 / (array.length - 1);

  return sum(num) * den;
}
