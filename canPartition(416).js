// Given a non-empty array containing only positive integers,
// find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

// Input: [1, 5, 11, 5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

function canPartition(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;

  const half = sum / 2;
  const dp = [];
  dp[0] = true;
  for (let num of nums) {
    for (let j = half; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }

  return dp[half] || false;
}

canPartition([1, 5, 11, 5]); //?
// canPartition([1, 2, 3, 5]); //?
