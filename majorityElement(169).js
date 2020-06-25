function majorityElement(nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    hash[n] ? hash[n]++ : (hash[n] = 1);
    if (hash[n] > nums.length / 2) return nums[i]; //?
  }
}

majorityElement([2, 2, 1, 1, 1, 2, 2]);
