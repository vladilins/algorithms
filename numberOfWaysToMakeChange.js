function numberOfWaysToMakeChange(n, denoms) {
  const ways = new Array(n + 1).fill(0); //?
  ways[0] = 1;
  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        ways[amount] += ways[amount - denom]; //?
        console.log(ways);
      }
    }
  }
  return ways[n]; //?
}

numberOfWaysToMakeChange(6, [1, 5, 2, 3, 8]);
