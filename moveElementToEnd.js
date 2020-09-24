// O(n) time | O(1) space
function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) j--;
    if (array[i] === toMove) swap(i, j, array);
    i++;
  }
  return array;
}

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
  return array;
}

moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2); //?
