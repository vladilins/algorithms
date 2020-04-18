function maxSumIncreasingSubsequence(array) {
  const sequences = new Array(array.length); //?
  const sums = [...array]; //?
  let maxSumIdx = 0;
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i]; //?
    for (let j = 0; j < i; j++) {
      const otherNum = array[j]; //?
      if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
        sums[i] = sums[j] + currentNum; //?
        sequences[i] = j; //?
      }
    }
    if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i; //?
  }
  return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)];
}

function buildSequence(array, sequences, currentIdx) {
  const sequence = [];
  console.log(sequences);
  while (currentIdx !== undefined) {
    console.log(currentIdx);
    sequence.unshift(array[currentIdx]); //?
    currentIdx = sequences[currentIdx]; //?
  }
  return sequence;
}

maxSumIncreasingSubsequence([8, 12, 2, 3, 15, 5, 7]); //?
