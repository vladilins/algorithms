// String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function stringCompress(string) {
  const numbers = [];
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      numbers.push(string[i], count);
      count = 1;
    }
  }
  return numbers.length > string.length ? string : numbers.join("");
}

stringCompress("abbbbbbc"); //?
stringCompress("a"); //?
