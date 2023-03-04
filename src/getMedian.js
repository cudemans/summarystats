import _matrixArrayIterator from "./utils/_matrixArrayIterator.js";
import _getMedian from "./_getMedian.js";

export default function getMedian(data, axis) {
  return _matrixArrayIterator(data, axis, _getMedian);
}
