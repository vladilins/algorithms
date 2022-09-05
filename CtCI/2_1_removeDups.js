// Remove Dups: Write code to remove duplicates from an unsorted linked list.
function removeDups(list) {
  if (!list) return list;

  const seen = new Set();

  const node = list;
  while (node.next) {
    if (seen.has(node.next.val)) {
      node.next = node.next.next;
    } else {
      seen.add(node.next.val);
      node = node.next;
    }
  }
 
  return list;
}
