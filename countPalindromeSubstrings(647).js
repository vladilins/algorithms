function countSubstrings(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    isPalindrome(i, i, s);
    isPalindrome(i, i + 1, s);
  }

  function isPalindrome(l, r, s) {
    while (l >= 0 && r <= s.length && s[l] === s[r]) {
      l--;
      r++;
      count++;
    }
  }

  return count;
}

countSubstrings("abc"); //?
