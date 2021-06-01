// O(nlog(n)) time | O(nlog(n)) space
function mergeSort(array) {
  if (array.length <= 1) return array;
  const middleIdx = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIdx);
  const rightHalf = array.slice(middleIdx);
  return mergeSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf));
}

function mergeSortedArrays(leftHalf, rightHalf) {
  const result = [];

  let iL = 0; //To track left sub array
  let iR = 0; //To track right sub array

  //Compare the two sub arrays and merge them in the sorted order
  while (iL < leftHalf.length && iR < rightHalf.length) {
    if (leftHalf[iL] < rightHalf[iR]) {
      result.push(leftHalf[iL]);
      iL++;
    } else {
      result.push(rightHalf[iR]);
      iR++;
    }
  }

  //If there are elements in the left sub array then add it to the result
  while (iL < leftHalf.length) {
    result.push(leftHalf[iL]);
    iL++;
  }

  //If there are elements in the right sub array then add it to the result
  while (iR < rightHalf.length) {
    result.push(rightHalf[iR]);
    iR++;
  }

  return result;
}

mergeSort([8, 5, 2, 9, 5, 6, 3]); //?

// O(nlog(n)) time | O(n)
// function mergeSort(array) {
//   if (array.length <= 1) return array;
//   const auxiliaryArray = array.slice();
//   mergeSortHelper(array, 0, array.length - 1, auxiliaryArray);
//   return array; //?
// }

// function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray) {
//   if (startIdx === endIdx) return;
//   const middleIdx = Math.floor((startIdx + endIdx) / 2);
//   mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray);
//   mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray);
//   doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray);
// }

// function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray) {
//   let k = startIdx;
//   let i = startIdx;
//   let j = middleIdx + 1;
//   while (i <= middleIdx && j <= endIdx) {
//     if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//       mainArray[k++] = auxiliaryArray[i++];
//     } else {
//       mainArray[k++] = auxiliaryArray[j++];
//     }
//   }
//   while (i <= middleIdx) {
//     mainArray[k++] = auxiliaryArray[i++];
//   }
//   while (j <= endIdx) {
//     mainArray[k++] = auxiliaryArray[j++];
//   }
// }
