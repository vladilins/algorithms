function levelOrder(root) {
  const result = [];
  const queue = [];
  if (!root) return result;
  queue.push(root);
  while (queue.length) {
    const sum = queue.length;
    const arr = [];
    for (let i = 1; i <= sum; i++) {
      if (queue[0].left) queue.push(queue[0].left);
      if (queue[0].right) queue.push(queue[0].right);
      arr.push(queue.shift().val);
    }
    result.push(arr);
  }
  return result;
}
