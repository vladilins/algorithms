// function interweavingStrings(one, two, tree) {
//   if (one.length + two.length !== tree.length) return false;

//   return areInterwoven(one, two, tree, 0, 0); //?
// }

// function areInterwoven(one, two, tree, i, j) {
//   const k = i + j;

//   if (k === tree.length) return true;

//   if (i < one.length && one[i] === tree[k]) {
//     if (areInterwoven(one, two, tree, i + 1, j)) return true;
//   }

//   if (j < two.length && two[j] === tree[k]) {
//     return areInterwoven(one, two, tree, i, j + 1);
//   }

//   return false;
// }

// interweavingStrings("algoexpert", "your-dream-job", "your-algodream-expertjob");

function interweavingStrings(one, two, tree) {
  if (one.length + two.length !== tree.length) return false;

  const cache = new Array(one.length + 1)
    .fill(0)
    .map((_) => new Array(two.length + 1).fill(null));
  return areInterwoven(one, two, tree, 0, 0, cache); //?
}

function areInterwoven(one, two, tree, i, j, cache) {
  if (cache[i][j] !== null) return cache[i][j];

  const k = i + j; //?

  if (k === tree.length) return true;

  if (i < one.length && one[i] === tree[k]) {
    cache[i][j] = areInterwoven(one, two, tree, i + 1, j, cache);
    if (cache[i][j]) return true;
  }

  if (j < two.length && two[j] === tree[k]) {
    cache[i][j] = areInterwoven(one, two, tree, i, j + 1, cache);
    return cache[i][j];
  }

  return false;
}

interweavingStrings("algoexpert", "your-dream-job", "your-algodream-expertjob");
