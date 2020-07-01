function linkedListCycle(head) {
  if (!head) return false;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) return true;
  }
  return false;
}

function linkedListCycle(head) {
  const nodes = new Set();
  while (head) {
    if (nodes.has(head)) return true;
    nodes.add(head);
    head = head.next;
  }
  return false;
}
