// O(nlog(n) + mlog(m)) time / O(1) space
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let result = [];
  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  while ((idxOne < arrayOne.length) & (idxTwo < arrayTwo.length)) {
    let first = arrayOne[idxOne];
    let second = arrayTwo[idxTwo];
    if (first < second) {
      current = second - first;
      idxOne++;
    } else if (second < first) {
      current = first - second;
      idxTwo++;
    } else {
      return [first, second];
    }
    if (smallest > current) {
      smallest = current;
      result = [first, second];
    }
  }
  return result;
}

smallestDifference([-1, 5, 10], [25, 235, 12, 8]); //?
