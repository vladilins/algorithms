function numersInPi(pi, numbers) {
  const numberTabel = {};
  for (let num of numbers) {
    numberTabel[num] = true;
  }
  const minSpaces = getMinSpaces(pi, numberTabel, {}, 0);
  return minSpaces === Infinity ? -1 : minSpaces;
}

function getMinSpaces(pi, numberTabel, cache, idx) {
  if (idx === pi.length) return -1;
  if (idx in cache) return cache[idx];
  console.log(cache);
  let minSpaces = Infinity;
  for (let i = idx; i < pi.length; i++) {
    const prefix = pi.slice(idx, i + 1);
    if (prefix in numberTabel) {
      const minSpacesInSuffix = getMinSpaces(pi, numberTabel, cache, i + 1); //?
      minSpaces = Math.min(minSpacesInSuffix + 1, minSpaces); //?
    }
  }
  cache[idx] = minSpaces; //?
  return cache[idx];
}

numersInPi("3141592", [3141, 5, 31, 2, 4159, 9, 42]); //?
