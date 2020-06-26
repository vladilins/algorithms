function findDisappearedNumbers(nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = Math.abs(nums[i]) - 1; //?
    nums[j] = Math.abs(nums[j]) * -1; //?
  }
  console.log(nums);

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result; //?
}

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
