// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.)
function palindromePermutation(string) {
  const stringArr = string.split("")
  const reverseString = stringArr
  const stringMiddle = Math.floor(stringArr.length / 2)
  for(let i = 0; i < stringMiddle; i++) {
    let last = stringArr.pop()
    stringArr.unshift(last)
    console.log(stringArr);
  }
  
}

palindromePermutation("taco cat");