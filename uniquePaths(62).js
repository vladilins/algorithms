function uniquePaths(m, n) {
  if (m === 1 || n === 1) return 1;

  let arr = [];

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[j] = (arr[j] || 1) + (arr[j - 1] || 1); //?
      console.log(arr);
    }
  }

  return arr[n - 1];
}

function uniquePaths(m, n) {
  const arr = new Array(m).fill(new Array(n).fill(1)); //?

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i][j - 1] + arr[i - 1][j]; //?
    }
    console.log(arr);
  }

  return arr[m - 1][n - 1];
}

// uniquePaths(3, 2); //?
uniquePaths(3, 3); //?
