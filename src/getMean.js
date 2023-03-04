import _matrixArrayIterator from "./utils/_matrixArrayIterator.js";
import _getMean from "./_getMean.js";

export default function getMean(data, axis) {
  return _matrixArrayIterator(data, axis, _getMean);
}
