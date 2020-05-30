class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(n) space
// function flattenBinaryTree(root) {
//   const inOrderNodes = getNodesInOrder(root, []);
//   for (let i = 0; i < inOrderNodes.length - 1; i++) {
//     const leftNode = inOrderNodes[i];
//     const rightNode = inOrderNodes[i + 1];
//     leftNode.right = rightNode;
//     rightNode.left = leftNode;
//   }

//   return inOrderNodes[0]; //?
// }

// function getNodesInOrder(tree, array) {
//   if (tree !== null) {
//     getNodesInOrder(tree.left, array);
//     array.push(tree);
//     getNodesInOrder(tree.right, array);
//   }
//   return array; //?
// }

// O(n) time | O(d)
function flattenBinaryTree(root) {
  const [leftMost, _] = flattenTree(root);
  return leftMost;
}

function flattenTree(node) {
  let leftMost, rightMost;

  if (node.left === null) {
    leftMost = node;
  } else {
    const [leftSubtreeLeftMost, leftSubtreeRightMost] = flattenTree(node.left);
    connectNodes(leftSubtreeRightMost, node);
    leftMost = leftSubtreeLeftMost;
  }

  if (node.right === null) {
    rightMost = node;
  } else {
    const [rightSubtreeLeftMost, rightSubtreeRightMost] = flattenTree(
      node.right
    );
    connectNodes(node, rightSubtreeLeftMost);
    rightMost = rightSubtreeRightMost;
  }

  return [leftMost, rightMost];
}

function connectNodes(left, right) {
  left.right = right;
  right.left = left;
}
