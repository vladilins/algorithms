function findUnsortedSubarray(nums) {
  let l = nums.length - 1;
  let r = 0;
  let min = nums[l];
  let max = nums[r];

  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1 - i;

    if (nums[i] < max) r = i; //?
    if (nums[j] > min) l = j; //?

    max = Math.max(nums[i], max); //?
    min = Math.min(nums[j], min); //?
  }
  return r - l < 1 ? 0 : r - l + 1;
}

findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]); //?
