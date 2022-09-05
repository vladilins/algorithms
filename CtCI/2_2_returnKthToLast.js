// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
function kthToLast(list, k) {
  if (!list) return -1;

  const len = 0;
  const values = [list];
  const node = list;
  while (node.next) {
    values.push(node.next);
    len++;
    node = node.next;
  }
  return values[len - k];
}

function kthToLast(list, k) {
  if (!list) {
    throw new Error("invalid list");
  }

  let last = list,
    kth = list;

  for (let i = 0; i < k; ++i) {
    last = last.next;
    if (!last) {
      throw new Error("list is not long enough");
    }
  }

  while (last.next) {
    last = last.next;
    kth = kth.next;
  }

  return kth.val;
}
