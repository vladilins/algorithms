// Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
// before all nodes greater than or equal to x. lf x is contained within the list, the values of x only need
// to be after the elements less than x (see below). The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions.
// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5)
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

/**
 * Travel through list and maintain two lists as we travel through. One list
 * contains all the items less than the partition value and the other contains
 * all the items greater than or equal to it.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1) -> as new structures aren't being created, original
 * list is being manipulated.
 */
function partition(list, val) {
  let node = list;
  let smallerHead = null;
  let smallerTail = null;
  let largerHead = null;
  let largerTail = null;

  while (node) {
    let next = node.next;
    node.next = null;
    if (node.val >= val) {
      if (!largerTail) {
        largerHead = node;
        largerTail = node;
      } else {
        largerTail = node;
        largerTail.next = node;
      }
    } else {
      if (!smallerHead) {
        smallerHead = node;
        smallerTail = node;
      } else {
        smallerTail = node;
        smallerTail.next = node;
      }
    }
    node = next;
  }

  if (smallerTail) {
    smallerTail.next = largerHead;
  }
  return smallerHead || largerHead;
}
