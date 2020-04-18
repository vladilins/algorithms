function powerset(array, idx = null) {
  if (idx === null) {
    idx = array.length - 1;
  }
  if (idx < 0) {
    return [[]];
  }
  const ele = array[idx];
  const subset = powerset(array, idx - 1);
  const length = subset.length;
  for (let i = 0; i < length; i++) {
    const currentSubset = subset[i];
    subset.push(currentSubset.concat(ele));
  }
  return subset;
}
function powerset(array) {
  const subsets = [[]];
  for (let ele of array) {
    const length = subsets.length; //?
    for (let i = 0; i < length; i++) {
      const currentSubset = subsets[i]; //?
      subsets.push(currentSubset.concat(ele)); //?
    }
  }
  return subsets; //?
}
powerset([1, 2, 3]);
