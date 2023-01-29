# summarystats

A lightweight package for summary stats in JavaScript. Please note this package is in the early stage of development. Take care when using it.

Expanded documentation coming soon.

## Installation

So far the package can only be installed through npm. unpkg coming soon.

To install:

`npm install summarystats`

## Functionality

So far, the package can calculate the following stats:

1. `getMean`: Takes an array and returns its mean.
2. `trimmedMean`: Takes and array and n, where n is the number of items to remove from the beginning and end of the distribution.
3. `getMedian`: Takes an array and returns its median.
4. `getMode`: Takes and array and returns its mode.
5. `getVariance`: Takes an array and returns its variance. `isSample` can be used to specify whether the data is the population or sample. By default `isSample` is set to `true`.
6. `getStandDev`: Takes an array and returns its standard deviation. `isSample` can be used to specify whether the data is the population or sample. By default `isSample` is set to `true`.
7. `getPercentile`: Takes and array and and returns the `nth` percentile.

## Importing

Functions can be imported individually. For example:

`const { getMean } = require('summarystats')`
