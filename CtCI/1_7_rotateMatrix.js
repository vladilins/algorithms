// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. (an you do this in place?
function rotateMatrix(matrix) {
  if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
    throw new Error("invalid matrix");
  }
  if (matrix.length < 2) {
    return matrix; // no need to do anything to rotate a 1,1 matrix
  }

  let len = matrix.length - 1;
  let half = Math.floor(matrix.length / 2);
  // loop through diagonal
  for (let start = 0; start < half; ++start) {
    // loop through x axis
    for (let i = 0; i < len - start * 2; ++i) {
      let y = start,
        x = start + i,
        prev = matrix[y][x];

      // loop through all 4 corners
      for (let j = 0; j < 4; ++j) {
        let nextY = x,
          nextX = len - y,
          next = matrix[nextY][nextX];
        matrix[nextY][nextX] = prev;
        prev = next;
        x = nextX;
        y = nextY;
      }
    }
  }

  return matrix;
}

rotateMatrix(
  [
    [1, 2],
    [3, 4],
  ],
  [
    [3, 1],
    [4, 2],
  ],
  [
    [4, 3],
    [2, 1],
  ],
  [
    [2, 4],
    [1, 3],
  ]
);
