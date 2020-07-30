function numberOfTrees(n) {
  let G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      G[i] += G[j - 1] * G[i - j]; //?
    }
  }
  return G[n];
}

numberOfTrees(5); //?

// function numberOfTrees(n) {
//   return factorial(2 * n) / (factorial(n + 1) * factorial(n));
// }

// function factorial(num) {
//   if (num <= 0) return 1;
//   else return num * factorial(num - 1);
// }

// numberOfTrees(3); //?
