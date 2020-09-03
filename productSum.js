// Wite a function that takes in a special array and return its product sum
function productSum(array, m = 1) {
  let sum = 0;
  for (let i of array) {
    if (!Array.isArray(i)) {
      sum += i;
    } else {
      sum += productSum(i, m + 1);
    }
  }
  return sum * m;
}

productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]); //?
