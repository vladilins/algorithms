function mergeTrees(t1, t2) {
  if (!t1 || !t2) return t1 || t2;
  return new TreenNode(
    t1 + t2,
    mergeTrees(t1.left, t2.left),
    mergeTrees(t1.right, t2.right)
  );
}
