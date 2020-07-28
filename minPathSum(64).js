function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;

  // initial the first row
  for (let i = 1; i < n; i++) {
    grid[0][i] = grid[0][i] + grid[0][i - 1];
  }
  console.log(grid);

  // initial the first column
  for (let i = 1; i < m; i++) {
    grid[i][0] = grid[i][0] + grid[i - 1][0];
  }
  console.log(grid);

  // for the rest of table, calculate Min( curr + top, curr, + left)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const top = grid[i - 1][j]; //?
      const left = grid[i][j - 1]; //?
      const cur = grid[i][j]; //?
      grid[i][j] = Math.min(top, left) + cur; //?
      console.log(grid);
    }
    console.log(grid);
  }

  return grid[m - 1][n - 1];
}

minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]); //?
