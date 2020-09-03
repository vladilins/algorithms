// O(n) time | O(1) space
function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (potentialMatch === target) {
      return middle;
    } else if (potentialMatch < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}
