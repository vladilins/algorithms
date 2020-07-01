function rob(nums) {
  if (nums.length === 0) return 0;
  let prev1 = 0;
  let prev2 = 0;
  for (let num of nums) {
    const temp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = temp;
  }
  return prev1;
}

rob([2, 7, 9, 3, 1]); // ?
rob([2, 1, 1, 2]); //?
