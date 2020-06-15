// O(n^4) time | O(1) space
// function squareOfZeroes(matrix) {
//   const n = matrix.length;
//   for (let topRow = 0; topRow < n; topRow++) {
//     for (let leftCol = 0; leftCol < n; leftCol++) {
//       let squareLength = 2;
//       while (squareLength <= n - leftCol && squareLength <= n - topRow) {
//         const bottomRow = topRow + squareLength - 1;
//         const rightCol = leftCol + squareLength - 1;
//         if (isSquareOfZeroes(matrix, topRow, leftCol, bottomRow, rightCol))
//           return true;
//         squareLength++;
//       }
//     }
//   }
//   return false;
// }

// function isSquareOfZeroes(matrix, r1, c1, r2, c2) {
//   for (let row = r1; row < r2 + 1; row++) {
//     if (matrix[row][c1] !== 0 || matrix[row][c2] !== 0) return false;
//   }
//   for (let col = c1; col < c2 + 1; col++) {
//     if (matrix[r1][col] !== 0 || matrix[r2][col] !== 0) return false;
//   }
//   return true;
// }

// O(n^3) time | O(n^2) space
function squareOfZeroes(matrix) {
  const infoMatrix = preComputeNumOfZeroes(matrix);
  const n = matrix.length;
  for (let topRow = 0; topRow < n; topRow++) {
    for (let leftCol = 0; leftCol < n; leftCol++) {
      let squareLength = 2;
      while (squareLength <= n - leftCol && squareLength <= n - topRow) {
        const bottomRow = topRow + squareLength - 1;
        const rightCol = leftCol + squareLength - 1;
        if (isSquareOfZeroes(infoMatrix, topRow, leftCol, bottomRow, rightCol))
          return true;
        squareLength++;
      }
    }
  }
  return false;
}

function isSquareOfZeroes(infoMatrix, r1, c1, r2, c2) {
  const squareLength = c2 - c1 + 1;
  const hasTopBorder = infoMatrix[r1][c1].numZeroesRight >= squareLength;
  const hasLeftBorder = infoMatrix[r1][c1].numZeroesBelow >= squareLength;
  const hasBottomBorder = infoMatrix[r2][c1].numZeroesRight >= squareLength;
  const hasRightBorder = infoMatrix[r1][c2].numZeroesBelow >= squareLength;
  return hasTopBorder && hasLeftBorder && hasBottomBorder && hasRightBorder;
}

function preComputeNumOfZeroes(matrix) {
  const infoMatrix = matrix.map((row) =>
    row.map((value) => {
      const numZeroes = value === 0 ? 1 : 0;
      return { numZeroesBelow: numZeroes, numZeroesRight: numZeroes };
    })
  );

  const lastIdx = matrix.length - 1;
  for (let row = lastIdx; row >= 0; row--) {
    for (let col = lastIdx; col >= 0; col--) {
      if (matrix[row][col] === 1) continue;
      if (row < lastIdx) {
        infoMatrix[row][col].numZeroesBelow +=
          infoMatrix[row + 1][col].numZeroesBelow;
      }
      if (col < lastIdx) {
        infoMatrix[row][col].numZeroesRight +=
          infoMatrix[row][col + 1].numZeroesRight;
      }
    }
  }

  return infoMatrix;
}

squareOfZeroes([
  [1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1],
  [0, 0, 0, 1, 0, 1],
  [0, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 1],
]); //?
