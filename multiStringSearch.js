// O(bs) time / O(n)
// function multiStringSearch(bigString, smallStrings) {
//   const result = [];
//   for (let s of smallStrings) {
//     if (bigString.includes(s)) {
//       result.push(true);
//     } else {
//       result.push(false);
//     }
//   }

//   return result; //?
// }

// multiStringSearch("this is a big string", ["this", "no", "ues", "a", "big"]);

// O(bns) time / O(n) space
function multiStringSearch(bigString, smallStrings) {
  return smallStrings.map((smallString) =>
    isInBigString(bigString, smallString)
  );
}

function isInBigString(bigString, smallString) {
  for (let i = 0; i < bigString.length; i++) {
    if (i + smallString.length > bigString.length) break;
    if (isInBigStringHelper(bigString, smallString, i)) return true;
  }
  return false;
}

function isInBigStringHelper(bigString, smallString, startIdx) {
  let leftBigIdx = startIdx;
  let rightBigIdx = startIdx + smallString.length - 1;
  let leftSmallIdx = 0;
  let rightSmallIdx = smallString.length - 1;
  while (leftBigIdx <= rightBigIdx) {
    if (
      bigString[leftBigIdx] != smallString[leftSmallIdx] ||
      bigString[rightBigIdx] != smallString[rightSmallIdx]
    ) {
      return false;
    }
    leftBigIdx++;
    rightBigIdx--;
    leftSmallIdx++;
    rightSmallIdx--;
  }
  return true;
}

multiStringSearch("this is a big string", ["this", "no", "ues", "a", "big"]); //?
