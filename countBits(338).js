function countBits(num) {
  var arr = [0, 1, 1];

  for (var i = 3; i <= num; i++) {
    var even = 0;
    var temp = i;
    var odd = 0;
    if (i % 2 === 0) {
      even += 1;
      temp = i - 1;
    }
    odd = arr[temp / 2];
    arr.push(even + odd);
  }

  return arr;
}

function countBits(num) {
  const bits = [];
  for (let i = 0; i <= num; i++) {
    // remove 0 from bits
    console.log(Number(i).toString(2));
    bits.push(Number(i).toString(2).replace(/0/g, "").length);
  }
  return bits;
}

countBits(5); //?
