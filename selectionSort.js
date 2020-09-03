// O(n^2) time | O(1) space
function selectionSort(array) {
  let start = 0;
  while (start < array.length - 1) {
    let smallest = start;
    for (let i = smallest + 1; i < array.length; i++) {
      if (array[i] < array[smallest]) smallest = i;
    }
    swap(start, smallest, array);
    start++;
  }
  return array;
}

function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
