function minHeightBst(array) {
  return constructMinHight(array, 0, array.length - 1);
}

function constructMinHight(array, startIdx, endIdx) {
  if (startIdx > endIdx) return null;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const bst = new BST(array[midIdx]);
  bst.left = constructMinHight(array, startIdx, midIdx - 1);
  bst.right = constructMinHight(array, midIdx + 1, endIdx);
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

const bst = new minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]); //?
