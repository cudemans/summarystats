import { arrayError } from "./errors.js";
/**
 * The mode is the value that appears most often in a set of data values.
 * Like the statistical mean and median, the mode is a way of expressing,
 * in a (usually) single number, important information about a random variable or a population.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Mode_(statistics))
 * @param array {Array} - Array of numbers
 * @param modeType {String} - Either "multiple" or "single" if array contains more than one mode. Default is "single".
 * @returns {Number} Mode of the given array
 **/

export default function getMode(array, modeType = "single") {
  // Error handling
  arrayError(array);

  const counts = {};
  array.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });
  const max = Math.max(...Object.values(counts));
  const mode = Object.keys(counts).filter((key) => counts[key] === max);

  // Check whether mode is an array of more than one value
  const modeNum =
    Array.isArray(mode) && mode.length > 1 ? mode.map((d) => +d) : mode[0];

  // if modeArray is not an array return the value
  if (!Array.isArray(modeNum)) return modeNum;

  // Check to see if user wants a single value or multiple value mode returned
  if (Array.isArray(modeNum) && modeType == "single") {
    return modeNum[0];
  } else if (modeType == "multiple") {
    return modeNum;
  } else {
    console.log("Please enter valid function parameter");
  }
}
