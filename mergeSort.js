// O(nlog(n)) time | O(nlog(n)) space
// function mergeSort(array) {
//   if (array.length <= 1) return array;
//   const middleIdx = Math.floor(array.length / 2);
//   const leftHalf = array.slice(0, middleIdx);
//   const rightHalf = array.slice(middleIdx);
//   return mergeSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf));
// }

// function mergeSortedArrays(leftHalf, rightHalf) {
//   const sortedArray = new Array(leftHalf.length + rightHalf.length);
//   let k = 0;
//   let i = 0;
//   let j = 0;
//   while (i < leftHalf.length && j < rightHalf.length) {
//     if (leftHalf[i] <= rightHalf[j]) {
//       sortedArray[k++] = leftHalf[i++]; //?
//     } else {
//       sortedArray[k++] = rightHalf[j++]; //?
//     }
//   }
//   console.log(sortedArray);
//   while (i < leftHalf.length) {
//     sortedArray[k++] = leftHalf[i++]; //?
//   }
//   console.log(sortedArray);
//   while (j < rightHalf.length) {
//     sortedArray[k++] = rightHalf[j++]; //?
//   }
//   console.log(sortedArray);
//   return sortedArray; //?
// }

// O(nlog(n)) time | O(n)
function mergeSort(array) {
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray);
  return array; //?
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    mainArray[k++] = auxiliaryArray[j++];
  }
}

mergeSort([8, 5, 2, 9, 5, 6, 3]);
