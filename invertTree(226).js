function invertTree(root) {
  if (!root) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}

function invertTree(root) {
  const stack = [root];

  while (stack.length) {
    const n = stack.pop();
    if (n) {
      [n.left, n.right] = [n.right, n.left];
      stack.push(n.left, n.right);
    }
  }
  return root;
}
