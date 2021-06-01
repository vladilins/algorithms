// O(n^2) time | O(1) space
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    // Last i elements are already in place
    for (let j = 0; j < array.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (array[j] > array[j + 1]) {
        // If the condition is true then swap them
        swap(j, j + 1, array);
      }
    }
  }
  return array; //?
}

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
}

bubbleSort([234, 43, 55, 63, 5, 6, 235, 547]);
