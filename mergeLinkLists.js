function mergeLinkLists(headOne, headTwo) {
  let p1 = headOne;
  let p2 = headTwo;
  let p1Prev = null;

  while (p1 !== null && p2 !== null) {
    if (p1.value < p2.value) {
      p1Prev = p1;
      p1 = p1.next;
    } else {
      if (p1 !== null) p1Prev.next = p2;
      p1Prev = p2;
      p2 = p2.next;
      p1Prev.next = p1;
    }
  }

  if (p1 === null) p1Prev.next = p2;
  return headOne.value < headTwo.value ? headOne : headTwo;
}

function mergeTwoLists(l1, l2) {
  if (!l1 || !l2) return l1 ? l1 : l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 ? l1 : l2;
  if (l1.val > l2.val) {
    [l1, l2] = [l2, l1];
  }
  l1.next = mergeTwoLists(l1.next, l2);
  return l1 || l2;
};
