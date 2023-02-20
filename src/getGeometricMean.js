import product from "./utils/product.js";
import { arrayError } from "./errors.js";

export default function getGeometricMean(array) {
  // Error handling
  arrayError(array);

  return Math.pow(product(array), 1 / array.length);
}
