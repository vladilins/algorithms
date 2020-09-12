// O(d) time | O(1) space
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depthOne = getDepth(descendantOne, topAncestor);
  const depthTwo = getDepth(descendantTwo, topAncestor);
  if (depthOne > depthTwo) {
    return backtrack(descendantOne, descendantTwo, depthOne - depthTwo);
  } else {
    return backtrack(descendantTwo, descendantOne, depthTwo - depthOne);
  }
}

function getDepth(bot, top) {
  let depth = 0;
  while (bot !== top) {
    depth++;
    bot = bot.ancestor;
  }
  return depth;
}

function backtrack(lower, higher, diff) {
  while (diff > 0) {
    lower = lower.ancestor;
    diff--;
  }
  while (lower !== higher) {
    lower = lower.ancestor;
    higher = higher.ancestor;
  }
  return lower;
}
