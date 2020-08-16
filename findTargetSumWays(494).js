// You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -.
//For each integer, you should choose one from + and - as its new symbol.

// Find out how many ways to assign symbols to make sum of integers equal to target S.

//Input: nums is [1, 1, 1, 1, 1], S is 3.
// Output: 5
// Explanation:

// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3

// There are 5 ways to assign symbols to make the sum of nums be target 3.

function findTargetSumWays(nums, S) {
  let sums = new Map([[0, 1]]);

  for (let num of nums) {
    const next = new Map();

    for (let [sum, amount] of sums) {
      const plus = sum + num; //?
      const minus = sum - num; //?

      next.set(plus, next.has(plus) ? next.get(plus) + amount : amount); //?
      next.set(minus, next.has(minus) ? next.get(minus) + amount : amount); //?
    }

    sums = next; //?
  }

  return sums.has(S) ? sums.get(S) : 0;
}

findTargetSumWays([1, 1, 1, 1, 1], 3); //?
