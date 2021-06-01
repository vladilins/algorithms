function insertInterval(intervals, newInterval) {
  const merged = [];
  let i = 0;
  let start = 0;
  let end = 1;

  // skip all intervals that come before the 'new_interval'
  while (i < intervals.length && intervals[i][end] < newInterval[start]) {
    merged.push(intervals[i]);
    i += 1;
  }

  //merge all intervals that overlap with 'new_interval'
  while (i < intervals.length && intervals[i][start] <= newInterval[end]) {
    newInterval[start] = Math.min(intervals[i][start], newInterval[start]);
    newInterval[end] = Math.max(intervals[i][end], newInterval[end]);
    i += 1;
  }

  //insert the new_interval
  merged.push(newInterval);

  // add all the remaining intervals to the output
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i += 1;
  }
  return merged; //?
}

insertInterval(
  [
    [1, 3],
    [5, 7],
    [8, 12],
  ],
  [4, 6]
);
