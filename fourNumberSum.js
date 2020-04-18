function fourNumberSum(array, targetSum) {
  const allPairSums = {};
  const quadruplets = [];
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[i] + array[j]; //?
      const difference = targetSum - currentSum; //?
      if (difference in allPairSums) {
        for (const pair of allPairSums[difference]) {
          quadruplets.push(pair.concat([array[i]], array[j]));
          console.log(pair.concat([array[i]], array[j]));
        }
      }
    }
    for (let k = 0; k < i; k++) {
      const currentSum = array[i] + array[k]; //?
      if (!(currentSum in allPairSums)) {
        allPairSums[currentSum] = [[array[k], array[i]]]; //?
      } else {
        allPairSums[currentSum].push([array[k], array[i]]);
      }
    }
  }
  console.log(allPairSums);
  return quadruplets; //?
}

// fourNumberSum([-1, 22, 18, 4, 7, 11, 2, -5, -3], 30);
fourNumberSum([7, 6, 4, -1, 1, 2], 16);
