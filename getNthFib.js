function getNthFib(n) {
  let lastTwo = [0, 1];
  let counter = 3;
  while (n >= counter) {
    const fib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = fib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

function getNthFib(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}
