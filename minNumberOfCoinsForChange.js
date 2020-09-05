// O(nd) time | O(n) space
function minNumberOfCoinsForChange(n, denoms) {
  const numberOfConins = new Array(n + 1).fill(Infinity);
  numberOfConins[0] = 0;
  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        numberOfConins[amount] = Math.min(
          numberOfConins[amount],
          numberOfConins[amount - denom] + 1
        );
      }
    }
  }
  return numberOfConins[n] === Infinity ? -1 : numberOfConins[n];
}

minNumberOfCoinsForChange(7, [1, 5, 10]); //?
