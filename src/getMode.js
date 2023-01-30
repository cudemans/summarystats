/**
 * Calculates the mode of a given array
 * @param array {Array} - Array of numbers
 * @returns {Number} - Mode of the given array
 **/
export default function getMode(array) {
  const counts = {};
  array.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });
  const max = Math.max(...Object.values(counts));
  const mode = Object.keys(counts).filter((key) => counts[key] === max);
  return mode.length === 1 ? mode[0] : mode;
}
