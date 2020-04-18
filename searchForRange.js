function searchForRange(array, target) {
  const finalRange = [-1, -1];
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
  return finalRange; //?
}

function alteredBinarySearch(array, target, left, right, range, goLeft) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      if (goLeft) {
        if (mid === 0 || array[mid - 1] !== target) {
          range[0] = mid;
          return;
        } else {
          right = mid - 1;
        }
      } else {
        if (mid === array.length - 1 || array[mid + 1] !== target) {
          range[1] = mid;
          return;
        } else {
          left = mid + 1;
        }
      }
    }
  }
}

searchForRange([0, 1, 22, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], 45);
