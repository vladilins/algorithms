function quickselect(array, position) {
  const k = position - 1;
  return quickselectHelper(array, 0, array.length - 1, k); //?
}

function quickselectHelper(array, startIdx, endIdx, position) {
  while (true) {
    if (startIdx > endIdx) {
      throw new Error("error");
    }
    const pivitIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;
    while (leftIdx <= rightIdx) {
      if (
        array[leftIdx] > array[pivitIdx] &&
        array[rightIdx] <= array[rightIdx]
      ) {
        swap(leftIdx, rightIdx, array);
      }
      if (array[leftIdx] <= array[pivitIdx]) {
        leftIdx++;
      }
      if (array[rightIdx] >= array[pivitIdx]) {
        rightIdx--;
      }
    }
    swap(pivitIdx, rightIdx, array);
    if (rightIdx === position) {
      return array[rightIdx];
    } else if (rightIdx < position) {
      startIdx = rightIdx + 1;
    } else {
      endIdx = leftIdx - 1;
    }
  }
}

function swap(left, right, array) {
  [array[left], array[right]] = [array[right], array[left]]; //?
}

quickselect([8, 5, 2, 9, 7, 6, 3], 3);
