function shiftedBinarySearch(array, target) {
  return shiftedBinarySearchHelper(array, target, 0, array.length - 1); //?
}

function shiftedBinarySearchHelper(array, target, left, right) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    const leftNum = array[left];
    const rightNum = array[right];
    if (target === potentialMatch) return middle;
    if (leftNum <= potentialMatch) {
      if (target < potentialMatch && leftNum <= target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target > potentialMatch && rightNum >= target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
}

shiftedBinarySearch([45, 61, 71, 72, 73, 0, 1, 33, 45], 33);
