function generateParenthesis(n) {
  const output = [];
  generateParenthesisHelper("", 0, 0);
  return output;

  function generateParenthesisHelper(str, left, right) {
    if (left === n && right === n) {
      output.push(str);
      console.log(output);
      return;
    }

    if (left < n) {
      generateParenthesisHelper(str + "(", left + 1, right);
    }

    if (left > right) {
      generateParenthesisHelper(str + ")", left, right + 1);
    }
  }
}

generateParenthesis(3); //?
