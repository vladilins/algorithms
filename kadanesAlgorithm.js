function kadanesAlgorithm(array) {
  let maxEndingHere = array[0];
  let maxSoFar = array[0];
  for (let i = 1; i < array.length; i++) {
    const num = array[i];
    maxEndingHere = (num, num + maxEndingHere);
    maxSoFar = (maxEndingHere, maxSoFar);
  }
  return maxSoFar;
}
