// URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith "J 13
// Output: "Mr%20J ohn%20Smith"
function urlify(string) {
  const arr = string.split(" ");
  const newString = arr.join("%20");
  return newString;
}

urlify("Mr John Smith"); //?
