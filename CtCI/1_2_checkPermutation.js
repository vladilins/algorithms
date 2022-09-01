// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;

  const hash = {};

  for (let i = 0; i < str1.length; i++) {
    hash[str1[i]] ? hash[str1[i]]++ : (hash[str1[i]] = 1);
  }

  for (let i of str2) {
    if (!hash[i]) return false;
    hash[i] == 1 ? delete hash[i] : hash[i]--; //?
  }

  return Object.keys(hash).length == 0; //?
}

checkPermutation("abcdefghi", "ihgfedcba"); //?
checkPermutation("1a1", "a11"); //?
//false
checkPermutation("abcdefghiz", "ihgfedcbaa"); //?
checkPermutation("1a1", "11"); //?
