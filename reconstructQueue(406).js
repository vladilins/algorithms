function reconstructQueue(people) {
  const arr = [];
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])); //?
  people.map((val) => {
    arr.splice(val[1], 0, val);
    console.log(arr);
  });
  return arr;
}

reconstructQueue([
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2],
]); //?
