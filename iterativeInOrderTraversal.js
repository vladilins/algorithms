function iterativeInOrderTraversal(tree, callback) {
  let previousNode = null;
  let currentNode = tree;
  while (currentNode !== null) {
    let nextNode;
    if (previousNode === null || previousNode === currentNode.parent) {
      if (currentNode.left !== null) {
        nextNode = currentNode.left;
      } else {
        callback(currentNode);
        nextNode =
          currentNode.right !== null ? currentNode.right : currentNode.parent;
      }
    } else if (previousNode === currentNode.left) {
      callback(currentNode);
      nextNode =
        currentNode.right !== null ? currentNode.right : currentNode.parent;
    } else {
      nextNode = currentNode.parent;
    }

    previousNode = currentNode;
    currentNode = nextNode;
  }
}

iterativeInOrderTraversal({
  nodes: [
    { id: "1", left: "2", right: "3", value: 1 },
    { id: "2", left: "4", right: null, value: 2 },
    { id: "3", left: "6", right: "7", value: 3 },
    { id: "4", left: null, right: "9", value: 4 },
    { id: "6", left: null, right: null, value: 6 },
    { id: "7", left: null, right: null, value: 7 },
    { id: "9", left: null, right: null, value: 9 },
  ],
  root: "1",
});

//test
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }
  return res;
};
