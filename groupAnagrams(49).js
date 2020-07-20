function groupAnagrams(strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sorted = str.split("").sort().join("");
    map[sorted] ? map[sorted].push(str) : (map[sorted] = [str]);
  }

  const output = [];
  for (let arr in map) {
    output.push(map[arr]);
  }

  return output;
}

function groupAnagrams(strs) {
  const group = new Map();
  const sortedStrs = strs.map((str) => Array.from(str).sort().join(""));
  for (let i = 0; i < strs.length; i++) {
    let sorted = sortedStrs[i];
    let original = strs[i];

    if (group.has(sorted)) {
      group.set(sorted, [...group.get(sorted), original]);
    } else {
      group.set(sorted, [original]);
    }
  }
  return [...group.values()];
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); //?
