function getIntersection(headA, headB) {
  if (!headA || !headB) return null;
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a === null ? headA : a.next;
    b = b === null ? headB : b.next;
  }

  return a;
}
