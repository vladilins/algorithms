// calculate maximum sum by summing up integers in subarray.
// subbarray must only contain adjacent numbers
// O(n) time | O(1) space
function kadanesAlgorithm(array) {
  let maxEndingHere = array[0];
  let maxSoFar = array[0];
  for (let i = 1; i < array.length; i++) {
    const num = array[i];
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxEndingHere, maxSoFar);
  }
  return maxSoFar;
}

kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]); //?
