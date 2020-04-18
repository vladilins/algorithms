function hasSingleCycle(array) {
  let elementsVisited = 0;
  let currentIdx = 0;
  while (elementsVisited < array.length) {
    if (elementsVisited > 0 && currentIdx === 0) return false;
    elementsVisited++;
    currentIdx = getNextIdx(array, currentIdx);
  }
}
function getNextIdx(array, i) {
  const jump = array[i];
  const nextIdx = (i + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}
