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



