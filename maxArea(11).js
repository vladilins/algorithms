function maxArea(height) {
  let i = 0;
  let j = height.length - 1;
  let water = 0;
  while (i < j) {
    water = Math.max(water, Math.min(height[i], height[j]) * (j - 1));
    if (height[i] < height[j]) {
      i++;
    } else if (height[i] > height[j]) {
      j--;
    } else {
      i++;
      j--;
    }
  }
  return water;
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); //?
