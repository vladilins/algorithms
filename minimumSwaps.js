// O(n Log n) time / O(n) space
function minimumSwaps(arr) {
  const arrLength = arr.length;

  const newArr = [];
  const newArrVisited = new Array(arr.length).fill(false);
  for (let i = 0; i < arrLength; i++) {
    newArr[i] = [];
    newArr[i].value = arr[i];
    newArr[i].key = i;
  }

  console.log(newArr);
  console.log(newArrVisited);

  newArr.sort((a, b) => {
    return a.value - b.value;
  });
  console.log(newArr);

  let swp = 0;
  for (let i = 0; i < arrLength; i++) {
    // check if already visited or swapped
    if (newArr[i].key == i || newArrVisited[i]) {
      continue;
    }

    let cycle = 0;
    let j = i;
    //find a cycle
    while (!newArrVisited[j]) {
      // mark as visited
      newArrVisited[j] = true;
      j = newArr[j].key; //point to the next key
      cycle++;
    }
    if (cycle > 0) {
      swp += cycle > 1 ? cycle - 1 : cycle;
    }
  }
  return swp; //?
}

minimumSwaps([1, 3, 5, 2, 4, 6, 7]);
