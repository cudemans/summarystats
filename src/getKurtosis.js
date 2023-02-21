import { getMean, getStandDev } from "./index.js";
import { arrayError } from "./errors.js";
import sum from "./utils/sum.js";

export default function getKurtosis(array) {
  // Error handling
  arrayError(array);

  const mean = getMean(array);

  const num = array.map((d) => {
    return (d - mean) ** 4;
  });

  const den = getStandDev(array) ** 4 * (array.length - 1);

  return sum(num) / den;
}
