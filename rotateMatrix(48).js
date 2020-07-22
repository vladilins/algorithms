function rotateMatrix(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      // top left corner
      let temp = matrix[i][j];

      // move bottom left to the top left
      matrix[i][j] = matrix[n - j - 1][i];

      // move bottom right to bottom left
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];

      // move top right to bottom right
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];

      // move top left to top right
      matrix[j][n - i - 1] = temp;
    }
  }

  return matrix;
}

rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); //?
