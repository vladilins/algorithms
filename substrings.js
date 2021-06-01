function substrings(s) {
  const subs = [[]];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      const substring = s.slice(i, j); //?
      subs.push(substring);
    }
  }
  return subs; //?
}

substrings("abc");
// substrings([1, 5, 3]);
