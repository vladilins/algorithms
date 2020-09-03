//Write a function that takes BST and a target integer value and return the closest value to that target value contained in the BST
function findClosestValueInBst(tree, target) {
  return helper(tree, target, Infinity);
}

function helper(tree, target, closest) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}
