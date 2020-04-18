// O(n) time / O(n) space
function caesarCipherEncryptor(string, key) {
  // Write your code here.
  const result = [];
  let newKey = key % 26;
  for (let letter of string) {
    result.push(getLetter(letter, newKey)); //?
  }
  return result.join(""); //?
}

function getLetter(letter, key) {
  let newLetter = letter.charCodeAt() + key; //?
  return newLetter <= 122
    ? String.fromCharCode(newLetter)
    : String.fromCharCode(96 + (newLetter % 122)); //?
}

caesarCipherEncryptor("xyz", 2);
