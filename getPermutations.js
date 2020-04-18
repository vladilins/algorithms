function getPermutations(array) {
  const permutations = [];
  permutationsHelper(array, [], permutations);
  return permutations; //?
}

function permutationsHelper(array, currentPermutation, permutations) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1)); //?
      const newPermutations = currentPermutation.concat([array[i]]); //?
      permutationsHelper(newArray, newPermutations, permutations);
    }
  }
}

getPermutations([1, 2, 3]);

// function getPermutations(array) {
//   const permutations = [];
//   permutationsHelper(0, array, permutations);
//   return permutations; //?
// }

// function permutationsHelper(i, array, permutations) {
//   if (i === array.length - 1) {
//     permutations.push(array.slice());
//   } else {
//     for (let j = i; j < array.length; j++) {
//       swap(i, j, array);
//       permutationsHelper(i + 1, array, permutations);
//       swap(i, j, array);
//     }
//   }
// }

// function swap(i, j, array) {
//   [array[i], array[j]] = [array[j], array[i]]; //?
// }

// getPermutations([1, 2, 3]);
