// // O(nk) time | O(n + k) space
// function mergeSortedArrays(arrays) {
//   const sortedList = [];
//   const elementIdxs = arrays.map(() => 0);
//   while (true) {
//     const smallestItems = [];
//     for (let arrayIdx = 0; arrayIdx < arrays.length; arrayIdx++) {
//       const relevantArray = arrays[arrayIdx];
//       const elementIdx = elementIdxs[arrayIdx];
//       if (elementIdx === relevantArray.length) continue;
//       smallestItems.push({
//         arrayIdx,
//         num: relevantArray[elementIdx],
//       });
//     }
//     if (smallestItems.length === 0) break;
//     const nextItem = getMinValue(smallestItems);
//     sortedList.push(nextItem.num);
//     elementIdxs[nextItem.arrayIdx]++;
//   }
//   return sortedList; //?
// }

// function getMinValue(items) {
//   let minValueIdx = 0;
//   for (let i = 1; i < items.length; i++) {
//     if (items[i].num < items[minValueIdx].num) minValueIdx = i;
//   }
//   return items[minValueIdx];
// }

function mergeSortedArrays(arrays) {
  const sortedList = [];
  const smallestItems = [];
  for (let arrayIdx = 0; arrayIdx < arrays.length; arrayIdx++) {
    smallestItems.push({
      arrayIdx,
      elementIdx: 0,
      num: arrays[arrayIdx][0],
    });
  }
  console.log(smallestItems);
  const minHeap = new MinHeap(smallestItems); //?
  while (!minHeap.isEmpty()) {
    const smallestItem = minHeap.remove(); //?
    const { arrayIdx, elementIdx, num } = smallestItem; //?
    sortedList.push(num);
    if (elementIdx === arrays[arrayIdx].length - 1) continue;
    minHeap.insert({
      arrayIdx,
      elementIdx: elementIdx + 1,
      num: arrays[arrayIdx][elementIdx + 1],
    });
    console.log(minHeap);
  }
  return sortedList; //?
}

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx].num < heap[childOneIdx].num) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap].num < heap[currentIdx].num) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx].num < heap[parentIdx].num) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }
}

mergeSortedArrays([
  [1, 5, 9, 21],
  [-1, 0],
  [-124, 81, 121],
  [3, 6, 12, 20, 150],
]);
