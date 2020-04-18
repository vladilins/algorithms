function knapsackProblem(items, copacity) {
  const knapsackValues = [];
  for (let i = 0; i < items.length + 1; i++) {
    const row = new Array(copacity + 1).fill(0);
    knapsackValues.push(row);
    console.log(knapsackValues);
  }
  for (let i = 1; i < items.length + 1; i++) {
    const currentValue = items[i - 1][0]; //?
    const currentWeight = items[i - 1][1]; //?
    for (let c = 0; c < copacity + 1; c++) {
      if (currentWeight > c) {
        knapsackValues[i][c] = knapsackValues[i - 1][c]; //?
      } else {
        knapsackValues[i][c] = Math.max(
          knapsackValues[i - 1][c],
          knapsackValues[i - 1][c - currentWeight] + currentValue
        ); //?
      }
    }
  }
  return [
    knapsackValues[items.length][copacity],
    getKnapsackItems(knapsackValues, items)
  ];
}

function getKnapsackItems(knapsackValues, items) {
  const sequence = [];
  let i = knapsackValues.length - 1; //?
  let c = knapsackValues[0].length - 1; //?
  while (i > 0) {
    if (knapsackValues[i][c] === knapsackValues[i - 1][c]) {
      i -= 1; //?
    } else {
      sequence.unshift(i - 1);
      c -= items[i - 1][1]; //?
      i -= 1; //?
    }
    if (c === 0) break;
  }
  return sequence; //?
}

knapsackProblem([[1, 2], [4, 3], [5, 6], [6, 7]], 10); //?
