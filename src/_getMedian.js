import sort from "./utils/sort.js";
import { arrayError } from "./errors.js";

export default function _getMedian(array) {
  // Error handling
  arrayError(array);

  const sorted = sort(array);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}
