function flippingBits(N) {
  let bit = N.toString(2);
  for (let i = bit.length; i < 32; i++) {
    bit = 0 + bit;
  }

  const flipbits = bit
    .split("")
    .map((b) => (1 - b).toString())
    .join("");
  return parseInt(flipbits, 2);
}
