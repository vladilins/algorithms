function nodeDepths(root, depth = 0) {
  if (root === null) return 0;
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}

class BinaryTree {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
