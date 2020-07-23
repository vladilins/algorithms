function combinationSum(candidates, target) {
  const output = [];
  const findCombination = (remain, path, start) => {
    if (remain < 0) {
      return;
    }
    if (remain === 0) {
      output.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      console.log([...path, candidates[i]]);
      findCombination(remain - candidates[i], [...path, candidates[i]], i);
    }
  };
  findCombination(target, [], 0);
  return output;
}

combinationSum([3, 2, 5], 8); //?
