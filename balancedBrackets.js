function balancedBrackets(string) {
  const opening = "({[";
  const closing = ")}]";
  const stack = [];
  const matching = { "}": "{", "]": "[", ")": "(" };
  for (const char of string) {
    if (opening.includes(char)) {
      stack.push(char);
    } else if (closing.includes(char)) {
      if (stack.length === 0) return false;
      if (stack[stack.length - 1] === matching[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

balancedBrackets("([])(){}(())()()"); //?
