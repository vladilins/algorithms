function minNumberOfJumps(array) {
  const jumps = new Array(array.length).fill(Infinity);
  jumps[0] = 0;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] >= i - j) {
        jumps[i] = Math.min(jumps[i], jumps[j] + 1);
      }
    }
    console.log(jumps[i]);
  }
  return jumps[jumps.length - 1];
}

minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]); //?
