function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];
    if (remaining in map) {
      return [map[remaining], i];
    }
    map[nums[i]] = i;
  }
  return [];
}

twoSum([2, 7, 11, 15], 9); //?
