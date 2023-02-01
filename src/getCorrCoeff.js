import getMean from "./getMean.js";
import { arrayEqualError, arrayError, lengthError } from "./errors.js";

/**
 * The correlation coefficient is a measure of linear correlation between two sets of data.
 * It is the ratio between the covariance of two variables and the product of their standard deviations; thus,
 * it is essentially a normalized measurement of the covariance, such that the result always has a value between −1 and 1.
 * -- [Wikipedia](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient)
 * @alias getCorrelationCoefficient
 * @param array1 {Array} - Array of numbers
 * @param array2 {Array} - Array of numbers
 * @returns {Number} Correlation coefficient
 
 **/

export default function getCorrCoeff(array1, array2) {
  // Error handling
  Object.keys(arguments).forEach((d, i) => {
    arrayError(arguments[i]);
    lengthError(arguments[i], 2);
  });
  arrayEqualError(array1, array2);

  // Get the mean of each array
  const arr1Mean = getMean(array1);
  const arr2Mean = getMean(array2);

  // Calculate the numerator of the equation
  const num = array1
    .map((d, i) => {
      return (d - arr1Mean) * (array2[i] - arr2Mean);
    })
    .reduce((a, b) => a + b, 0);

  let tracker = [[], []];
  array1.forEach((d, i) => {
    tracker[0].push((d - arr1Mean) ** 2);
    tracker[1].push((array2[i] - arr2Mean) ** 2);
  });

  // Calculate the denominator
  const den = Math.sqrt(
    tracker[0].reduce((a, b) => a + b, 0) *
      tracker[1].reduce((a, b) => a + b, 0)
  );

  return num / den;
}
