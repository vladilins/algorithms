// O(n^2) time / O(n) space
function threeNumberSum(array, targetSum) {
  const sortedArr = array.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sortedArr.length; i++) {
    let left = i + 1;
    let right = sortedArr.length - 1;
    while (left < right) {
      let sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
      if (sum === targetSum) {
        result.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
        left++;
        right--;
      } else if (sum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0); //?
