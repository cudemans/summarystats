function arrayError(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input is not an array");
  }
}

function lengthError(array, length) {
  if (array.length < length) {
    throw new Error("Input is less than required minimum length");
  }
}

function arrayEqualError(array1, array2) {
  if (array1.length != array2.length) {
    throw new Error(
      `Array dimensions do not match | array1 length: ${array1.length}, array2 length: ${array2.length}`
    );
  }
}

export { lengthError, arrayError, arrayEqualError };
