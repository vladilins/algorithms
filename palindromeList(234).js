// O(n) time | O(1) space
function palindromeList(head) {
  let slow = head;
  let fast = head;
  // find middle
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // reverse second half
  let node = null;
  while (slow) {
    const next = slow.next;
    slow.next = node;
    node = slow;
    slow = next;
  }

  // compare
  while (node) {
    if (node.val !== head.val) return false;
    node = node.next;
    head = head.next;
  }
  return true;
}
