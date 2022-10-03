function StringChallenge(str) {
  const arr = str.split(">"); //?
  const array = arr.splice(0, arr.length - 1); //?
  const stack = [];
  const clean = [];

  for (let w of array) {
    if (w[0] === "<") {
      clean.push(w); //?
    } else {
      for (let i = 0; i < w.length; i++) {
        if (w[i] === "<") {
          clean.push(w.slice(i)); //?
        }
      }
    }
    clean;
  }
  console.log(clean);

  for (let s of clean) {
    switch (s) {
      case "<div":
        stack.push("</div");
        break;
      case "<b":
        stack.push("</b");
        break;
      case "<em":
        stack.push("</em");
        break;
      case "<i":
        stack.push("</i");
        break;
      case "<p":
        stack.push("</p");
        break;
      default:
        if (s !== stack.pop()) {
          return s; //?
        }
    }
  }

  // code goes here
  return stack.length === 0; //?
}

StringChallenge("<div><div><b></b></div></p>"); //?
// StringChallenge("<div><b><p>hello world</p></b></div>"); //?

var maxProfit = function (arr) {
  let maxGain = 0;
  let minStock = arr[0];

  for (let i = 0; i < arr.length; i++) {
    minStock = Math.min(minStock, arr[i]);
    maxGain = Math.max(maxGain, arr[i] - minStock);
  }
  // code goes here
  return maxGain === 0 ? -1 : maxGain; //?
};

maxProfit([10, 12, 4, 5, 9]);
maxProfit([10, 9, 8, 2]); //?

function SearchingChallenge(strArr) {
  const matrix = strArr.map((a) => a.split("")); //?
  const visited = matrix.map((a) => a.map((b) => (b = false))); // ?
  const n = matrix.length;

  function isSafe(M, row, col, c, n, l) {
    // If row and column are valid and element
    // is matched and hasn't been visited then
    // the cell is safe
    return (
      row >= 0 &&
      row < n &&
      col >= 0 &&
      col < l &&
      M[row][col] == c &&
      !visited[row][col]
    );
  }
  
  return arr; //?
}

SearchingChallenge(["01111", "01101", "00011", "11110"]);

var maxRow = 500;
var maxCol = 500;

var visited = Array(maxRow)
  .fill()
  .map(() => Array(maxCol).fill(false));

// Function that return true if mat[row][col]
// is valid and hasn't been visited
function isSafe(M, row, col, c, n, l) {
  // If row and column are valid and element
  // is matched and hasn't been visited then
  // the cell is safe
  return (
    row >= 0 &&
    row < n &&
    col >= 0 &&
    col < l &&
    M[row].charAt(col) == c &&
    !visited[row][col]
  );
}

// Function for depth first search
function DFS(M, row, col, c, n, l) {
  // These arrays are used to get row and column
  // numbers of 4 neighbours of a given cell
  var rowNbr = [-1, 1, 0, 0];
  var colNbr = [0, 0, 1, -1];

  // Mark this cell as visited
  visited[row][col] = true;

  // Recur for all connected neighbours
  for (var k = 0; k < 4; ++k) {
    if (isSafe(M, row + rowNbr[k], col + colNbr[k], c, n, l)) {
      DFS(M, row + rowNbr[k], col + colNbr[k], c, n, l);
    }
  }
}

// Function to return the number of
// connectewd components in the matrix
function connectedComponents(M, n) {
  var connectedComp = 0;
  var l = M[0].length;

  for (var i = 0; i < n; i++) {
    for (j = 0; j < l; j++) {
      if (!visited[i][j]) {
        var c = M[i].charAt(j);
        DFS(M, i, j, c, n, l);
        connectedComp++;
      }
    }
  }

  return connectedComp;
}

// Driver code

var M = ["aabba", "aabba", "aaaca"];
var n = M.length;
document.write(connectedComponents(M, n));
