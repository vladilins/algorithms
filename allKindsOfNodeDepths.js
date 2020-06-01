// O(nlog(n)) time | O(h) space
// function allKindsOfNodeDepths(root) {
//   if (root === null) return 0;
//   return (
//     allKindsOfNodeDepths(root.left) +
//     allKindsOfNodeDepths(root.right) +
//     nodeDepths(root)
//   );
// }

// function nodeDepths(node, depth = 0) {
//   if (node === null) return 0;
//   return (
//     depth + nodeDepths(node.left, depth + 1) + nodeDepths(node.right, depth + 1)
//   );
// }

//O(n) time | O(h) space
function allKindsOfNodeDepths(root) {
  return getTreeInfo(root).sumOfAllDepths;
}

function getTreeInfo(tree) {
  if (tree === null) {
    return {
      numNodesInTree: 0,
      sumOfDepths: 0,
      sumOfAllDepths: 0,
    };
  }

  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);

  const sumOfLeftDepths =
    leftTreeInfo.sumOfDepths + leftTreeInfo.numNodesInTree;
  const sumOfRightDepths =
    rightTreeInfo.sumOfDepths + rightTreeInfo.numNodesInTree;

  const numNodesInTree =
    1 + leftTreeInfo.numNodesInTree + rightTreeInfo.numNodesInTree;
  const sumOfDepths = sumOfLeftDepths + sumOfRightDepths;
  const sumOfAllDepths =
    sumOfDepths + leftTreeInfo.sumOfAllDepths + rightTreeInfo.sumOfAllDepths;

  return {
    numNodesInTree,
    sumOfDepths,
    sumOfAllDepths,
  };
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
