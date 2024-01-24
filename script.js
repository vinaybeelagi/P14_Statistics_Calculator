//getMean Function
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;
//getMedian Function:Calculates the median of an array of numbers.
const getMedian = (array) => {
  const sorted = array.slice().sort((a, b) => a - b);
  const median =
    array.length % 2 === 0
      ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
      : sorted[Math.floor(array.length / 2)];
  return median;
}
//getMode Function:Calculates the mode (most frequent element(s)) of an array of numbers.
const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort(
    (a, b) => counts[b] - counts[a]
  )[0];
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );
  return mode.join(", ");
}
//getRange Function:Calculates the range (difference between the maximum and minimum) of an array of numbers.
const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
}
//getVariance Function
const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0) / array.length;
  return variance;
}
//getStandardDeviation Function:Calculates the standard deviation by taking the square root of the variance.
const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}

