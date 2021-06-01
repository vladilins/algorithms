function decodeString(s) {
  const stack = [];
  for (let char of s) {
    if (char !== "]") {
      stack.push(char);
      continue;
    }
    // get letters until [
    let cur = stack.pop(); //?
    let str = "";
    while (cur !== "[") {
      str = cur + str; //?
      cur = stack.pop(); //?
    }
    // get multiplier
    let num = "";
    cur = stack.pop(); //?
    while (Number.isInteger(+cur)) {
      num = cur + num; //?
      cur = stack.pop(); //?
    }
    // push current value
    stack.push(cur); //?
    // push str * num
    stack.push(str.repeat(Number(num))); //?
  }
  return stack.join(""); //?
}

// decodeString("3[a]2[bc]");
decodeString("3[a2[c]]");
