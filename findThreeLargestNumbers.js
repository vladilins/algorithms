function findThreeLargestNumbers(array) {
  // Write your code here.
  const result = [null, null, null];
  for (let num of array) {
    updateResult(result, num);
  }
  return result; //?
}

function updateResult(result, num) {
  if (result[2] === null || num > result[2]) {
    shiftAndUpdate(result, num, 2);
  } else if (result[1] === null || num > result[1]) {
    shiftAndUpdate(result, num, 1);
  } else if (result[0] === null || num > result[0]) {
    shiftAndUpdate(result, num, 0);
  }
}

function shiftAndUpdate(arr, num, idx) {
  console.log(arr);
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      arr[i] = num; //?
    } else {
      arr[i] = arr[i + 1]; //?
    }
  }
  console.log(arr);
}

findThreeLargestNumbers([1, 235, 23, 12, 56, 34, 75]);
