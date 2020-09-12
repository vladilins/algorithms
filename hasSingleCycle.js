// O(n) time | O(1) space
function hasSingleCycle(array) {
  let elementsVisited = 0;
  let currentIdx = 0;
  while (elementsVisited < array.length) {
    if (elementsVisited > 0 && currentIdx === 0) return false;
    elementsVisited++;
    currentIdx = getNextIdx(array, currentIdx);
  }
  return currentIdx === 0;
}
function getNextIdx(array, i) {
  const jump = array[i];
  const nextIdx = (i + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

hasSingleCycle(2, 3, 1, -4, -4, 2); //?
