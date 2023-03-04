import matrixArrayIterator from "./utils/matrixArrayIterator.js";
import _getMean from "./_getMean.js";

export default function getMean(data, axis) {
  return matrixArrayIterator(data, axis, _getMean);
}
