import sum from "./utils/sum.js";
import { arrayError, lengthError } from "./errors.js";

export default function _getMean(array) {
  // Error handling
  arrayError(array);
  lengthError(array, 1);

  return sum(array) / array.length;
}
