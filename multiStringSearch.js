// O(bs) time / O(n)
function multiStringSearch(bigString, smallStrings) {
  const result = [];
  for (let s of smallStrings) {
    if (bigString.includes(s)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result; //?
}

multiStringSearch("this is a big string", ["this", "no", "ues", "a", "big"]);
