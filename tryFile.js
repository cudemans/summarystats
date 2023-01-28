const { getMean, getMedian, getModem, getStandDev } = require("./index.js");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(getMean(array));
// console.log(getMedian(array));
// console.log(getMode(array));
console.log(getStandDev(array, (isSample = false)));
