// Write a function that takes BT and return a list of its
//branch sums ordered from leftmost branch sum to rightmost branch sum
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const sums = [];
  calculateSums(root, 0, sums);
  return sums;
}

function calculateSums(node, runningSum, sums) {
  if (!node) {
    return;
  }

  const newRunningSum = node.value + runningSum;
  if (!node.left && !node.right) {
    return sums.push(newRunningSum);
  }

  calculateSums(node.left, newRunningSum, sums);
  calculateSums(node.right, newRunningSum, sums);
}
