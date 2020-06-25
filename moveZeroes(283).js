function moveZeroes(nums) {
  for (let i = nums.length; 0 <= i; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums; //?
}

moveZeroes([0, 0, 1]);
