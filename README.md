# summarystats

A lightweight package for summary stats in JavaScript. Please note this package is in the early stage of development. Take care when using it.

Expanded documentation can be found in the [functionality](https://github.com/cudemans/summarystats/wiki/Functionality) wiki.

## Installation

So far the package can only be installed through npm. unpkg coming soon.

To install:

`npm install summarystats`

## Functionality

So far, the package can calculate the following stats:

1. `getMean`: Takes an array and returns its mean.
2. `getTrimmedMean`: Takes and array and n, where n is the number of items to remove from the beginning and end of the distribution.
3. `getMedian`: Takes an array and returns its median.
4. `getMode`: Takes and array and returns its mode.
5. `getVariance`: Takes an array and returns its variance. `isSample` can be used to specify whether the data is a population or sample. By default `isSample` is set to `true`.
6. `getStandDev`: Takes an array and returns its standard deviation. `isSample` can be used to specify whether the data is a population or sample. By default `isSample` is set to `true`.
7. `getPercentile`: Takes and array and an nth percentile value and returns the `nth` percentile.
8. `getQuartiles`: Takes an array and returns the first, middle, and third quartiles.
9. `getRange`: Takes an array and returns its range.
10. `getIQR`: Takes an array and returns its inter-quartile range.
11. `getCoV`: Takes and array and returns its coefficient of variation.
12. `getMAD`: Takes and array and returns its median absolute deviation.
13. `getZScore`: Takes an array and a value and returns the z-score for the value.
14. `getCorrCoeff`: Takes two arrays and calculates their correlation coefficient.
15. `getHarmonicMean`: Takes an array and returns the harmonic mean.
16. `getGeometricMean`: Takes an array and returns the geometric mean.
17. `getStandardError`: Takes an array and returns the standard error.
18. `getKurtosis` : Takes an array and returns the kurtosis.
19. `getSkewness`: Takes an array and calculates the skewness.

### Utilities

1. `matrixArrayIterator`: Utility function to compute a statistic across the axes of an n-dimensional array.

## Importing and usage

Functions can be imported individually. For example:

`import { getMean } from 'summarystats'`

And then called:

```js
const array = [2, 3, 4, 5, 6];
const mean = getMean(array);
```

Alternatively, the `stats` object can be imported:

`import stats from 'summarystats'`

And then statistical function can be called on this object. This negates the need for multiple imports.

```js
const array = [2, 3, 4, 5, 6];
const mean = stats.getMean(array);
```
