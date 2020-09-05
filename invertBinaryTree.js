// O(n) time / O(d) space
function invertBinaryTree(tree) {
  if (tree === null) return;
  swapLeftandRight(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

function swapLeftandRight(tree) {
  [tree.left, tree.right] = [tree.right, tree.left];
}
