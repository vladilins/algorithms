function sameBSTs(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  if (arrayOne[0] !== arrayTwo[0]) return false;
  if (arrayOne.length === 0 && arrayTwo.length === 0) return true;

  const leftOne = getSmaller(arrayOne);
  const leftTwo = getSmaller(arrayTwo);
  const rightOne = getBiggerOrEqual(arrayOne);
  const rightTwo = getBiggerOrEqual(arrayTwo);

  return sameBSTs(leftOne, leftTwo) && sameBSTs(rightOne, rightTwo);
}

function getSmaller(arr) {
  const smallerArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      smallerArr.push(arr[i]);
    }
  }
  return smallerArr; //?
}

function getBiggerOrEqual(arr) {
  const biggerOrEqual = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[0]) {
      biggerOrEqual.push(arr[i]);
    }
  }
  return biggerOrEqual; //?
}

sameBSTs([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81]); //?
