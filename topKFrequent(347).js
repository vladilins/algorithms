function topKFrequent(nums, k) {
  const map = {};
  for (let i of nums) {
    map[i] ? map[i]++ : (map[i] = 1);
  }
  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .splice(0, k); //?
}

topKFrequent([1, 1, 1, 2, 2, 3], 2); //?
