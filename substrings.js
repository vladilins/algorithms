function substrings(s) {
  const subs = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      subs.push(s.slice(i, j));
    }
  }
  return subs; //?
}

// substrings("abc");
substrings([1, 2, 3, 4, 5]);
