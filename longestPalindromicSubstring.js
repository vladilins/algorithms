function longestPalindromicSubstring(string) {
  let current = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const even = getLongest(string, i - 1, i);
    const odd = getLongest(string, i - 1, i + 1);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    current =
      longest[1] - longest[0] > current[1] - current[0] ? longest : current;
  }
  return string.slice(current[0], current[1]);
}

function getLongest(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}

longestPalindromicSubstring("abaxyzzyxf"); //?
