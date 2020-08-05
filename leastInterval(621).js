function leastInterval(tasks, n) {
  if (n === 0) return tasks.length;

  const map = {};
  for (let t of tasks) {
    map[t] ? map[t]++ : (map[t] = 1);
  }

  let max = 0; // task max frequency
  for (let t in map) {
    max = Math.max(max, map[t]);
  }

  let count = 0; // the number of tasks with same max frequency
  for (let t in map) {
    if (map[t] === max) {
      count++;
    }
  }

  return Math.max(
    // case 1
    // AB...AB... = (max - 1) * (n + 1)
    // AB...AB...AB = (max - 1) * (n + 1) + count
    (max - 1) * (n + 1) + count,

    // case 2
    // e.g. (ABC)(ABD)(ABEF)
    tasks.length
  );
}

leastInterval(["A", "A", "A", "B", "B", "B"], 2); //?
