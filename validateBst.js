// return a boolean whether BST is valid
// O(n) time / O(depth) space
function validateBst(tree) {
  return helper(tree, -Infinity, Infinity);
}

function helper(tree, min, max) {
  if (tree === null) return true;
  if (tree.value < min || tree.value >= max) return false;
  const validLeft = helper(tree.left, min, tree.value);
  return validLeft && helper(tree.right, tree.value, max);
}
