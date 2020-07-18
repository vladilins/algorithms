function kthSmallest(root, k) {
  const arr = [];
  const nums = inOrder(root, arr);
  return nums[k - 1];
}

function inOrder(root, arr) {
  if (root === null) return arr;
  inOrder(root.left, arr);
  arr.push(root.val);
  inOrder(root.right, arr);
  return arr;
}
