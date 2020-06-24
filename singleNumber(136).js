function singleNumber(nums) {
  const map = {};
  for (let num of nums) {
    map[num] ? delete map[num] : (map[num] = 1);
  }
  return Object.keys(map)[0]; //?
}

singleNumber([4, 1, 2, 1, 2]);
