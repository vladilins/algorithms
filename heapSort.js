function heapSort(array) {
  buildHeap(array);
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    swap(0, endIdx, array);
    siftDown(0, endIdx - 1, array);
  }
  return array; //?
}

function buildHeap(array) {
  const firstParentIdx = Math.floor((array.length - 2) / 2); //?
  for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, array.length - 1, array);
  }
}

function siftDown(currentIdx, endIdx, heap) {
  let childOneIdx = currentIdx * 2 + 1; //?
  while (childOneIdx <= endIdx) {
    const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1; //?
    let idxTwoSwap;
    if (childOneIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
      idxTwoSwap = childTwoIdx;
    } else {
      idxTwoSwap = childOneIdx;
    }
    if (heap[idxTwoSwap] > heap[currentIdx]) {
      swap(currentIdx, idxTwoSwap, heap);
      currentIdx = idxTwoSwap;
      childOneIdx = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
}

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]]; //?
}

heapSort([8, 5, 2, 9, 5, 6, 3]);
