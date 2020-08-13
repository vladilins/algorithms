function flatten(root) {
  let prev = null;
  const traverse = (node) => {
    if (!node) return;

    traverse(node.right);
    traverse(node.left);

    // task
    node.left = null;
    node.right = prev;
    prev = node;
  };

  traverse(root);
}
