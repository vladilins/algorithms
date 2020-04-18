function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array; //?
}

function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  const pivot = startIdx; //?
  let leftIdx = startIdx + 1; //?
  let rightIdx = endIdx; //?
  while (leftIdx <= rightIdx) {
    if (array[leftIdx] > array[pivot] && array[rightIdx] < array[pivot]) {
      swap(array, leftIdx, rightIdx);
    }
    if (array[leftIdx] <= array[pivot]) leftIdx++;
    if (array[rightIdx] >= array[pivot]) rightIdx--;
  }
  swap(array, pivot, rightIdx);
  console.log(rightIdx - 1 - startIdx, endIdx - (rightIdx - 1));
  const leftSubarrayIsSmaller =
    rightIdx - 1 - startIdx < endIdx - (rightIdx - 1); //?
  if (leftSubarrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx);
    quickSortHelper(array, startIdx, rightIdx - 1);
  }
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]; //?
}

// quickSort([8, 5, 2, 9, 5, 6, 3]);
quickSort([10, 3, 12, 7, 2, 11, 9]);
