function minNumerOfCoinsForChange(n, denoms) {
  const numberOfCoins = new Array(n + 1).fill(Infinity);
  numberOfCoins[0] = 0;
  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      numberOfCoins[amount] = Math.min(
        numberOfCoins[amount],
        numberOfCoins[amount - denom] + 1
      );
    }
  }
  return numberOfCoins[n] === Infinity ? -1 : numberOfCoins[n];
}
