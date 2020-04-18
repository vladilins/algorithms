function waterArea(hightes) {
  const maxes = new Array(hightes.length).fill(0);
  let leftMax = 0;
  for (let i = 0; i < hightes.length; i++) {
    let hight = hightes[i];
    maxes[i] = leftMax; //?
    leftMax = Math.max(leftMax, hight);
  }
  let rightMax = 0;
  for (let i = hightes.length - 1; i >= 0; i--) {
    let hight = hightes[i];
    let minHight = Math.min(rightMax, maxes[i]); //?
    if (hight < minHight) {
      maxes[i] = minHight - hight; //?
    } else {
      maxes[i] = 0;
    }
    rightMax = Math.max(rightMax, hight); //?
  }
  return maxes.reduce((a, b) => a + b, 0);
}
waterArea([0, 8, 0, 0, 5, 0, 10, 0, 0, 1, 1, 3]); //?
