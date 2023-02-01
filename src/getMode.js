import { arrayError } from "./errors.js";
/**
 * The mode is the value that appears most often in a set of data values.
 * Like the statistical mean and median, the mode is a way of expressing,
 * in a (usually) single number, important information about a random variable or a population.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Mode_(statistics))
 * @param array {Array} - Array of numbers
 * @returns {Number} Mode of the given array
 **/
export default function getMode(array) {
  // Error handling
  arrayError(array);

  const counts = {};
  array.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });
  const max = Math.max(...Object.values(counts));
  const mode = Object.keys(counts).filter((key) => counts[key] === max);
  return mode.length === 1 ? mode[0] : mode;
}
