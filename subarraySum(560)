// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Input: (nums = [1, 1, 1]), (k = 2);
// Output: 2;

function subarraySum(nums, k) {
  let map = { 0: 1 };
  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map[sum - k]) {
      count += map[sum - k]; //?
    }
    map[sum] = map[sum] ? map[sum] + 1 : 1;
    console.log(map);
  }
  return count;
}

subarraySum([1, 1, 1], 2); //?
