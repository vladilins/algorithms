function countNumbers(array) {
  const map = {};
  for (let num of array) {
    map[num] ? map[num]++ : (map[num] = 1);
  }
  return map; //?
}

countNumbers([1, 5, 2, 6, 1, 2, 3, 4, 5, 4, 2]);
