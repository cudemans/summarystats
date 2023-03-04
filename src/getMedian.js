import matrixArrayIterator from "./utils/matrixArrayIterator.js";
import _getMedian from "./_getMedian.js";

export default function getMedian(data, axis) {
  return matrixArrayIterator(data, axis, _getMedian);
}
