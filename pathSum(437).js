//O(n^2) time | O(n^2) space
function pathSum(root, sum) {
  if (!root) return 0;
  return (
    pathSumHelper(root, sum) +
    pathSum(root.left, sum) +
    pathSum(root.right, sum)
  );
}

function pathSumHelper(root, sum) {
  if (!root) return 0;
  return (
    (root.val === sum ? 1 : 0) +
    pathSumHelper(root.left, sum - root.val) +
    pathSumHelper(root.right, sum - root.val)
  );
}

// O(n) time | O(n) space
function pathSum(root, sum) {
  const cache = { 0: 1 };
  return dfs(root, cache, sum, 0);
}

function dfs(root, cache, sum, currSum) {
  if (!root) return 0;
  currSum += root.val;
  const oldSum = currSum - sum;
  let res = cache[oldSum] || 0;
  cache[currSum] = (cache[currSum] || 0) + 1;
  res +=
    dfs(root.left, cache, sum, currSum) + dfs(root.right, cache, sum, currSum);
  cache[currSum]--;
  return res;
}
