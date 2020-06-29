function diameterOfBinaryTree(root) {
  let max = 0;
  dfs(root);
  return max;

  function dfs(root) {
    if (!root) return 0;
    const left = dfs(root.left);
    const right = dfs(root.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  }
}
