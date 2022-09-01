// // One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.
// EXAMPLE
// pale, pIe -> true
// pales. pale -> true
// pale. bale -> true
// pale. bake -> false

function oneArray(str1, str2) {
  if (Math.abs(str1.length - str2.length) >= 2) return false;

  let isEdited = false;
  for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      if (isEdited) return false;

      if (str1.length > str2.length) {
        j--;
      } else if (str1.length < str2.length) {
        i--;
      }
      isEdited = true;
    }
  }

  return true;
}

oneArray("pale", "ple"); //?
oneArray("pales", "pale"); //?
oneArray("abcdefghiz", "ihgfedcbaa"); //?
oneArray("45678", "1239"); //?
