class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  // O(n ^ 2) time / O(n ^ 2) space
  populateSuffixTrieFrom(string) {
    // Write your code here.
    for (let i = 0; i < string.length; i++) {
      this.insertSuffix(string, i);
    }
  }

  insertSuffix(string, i) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      let letter = string[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
    node[this.endSymbol] = true;
  }

  // O(m) time / O(1) space
  contains(string) {
    // Write your code here.
    let node = this.root;
    for (let letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    return this.endSymbol in node;
  }
}

const suffix = new SuffixTrie("babc"); //?
suffix.contains("abc"); //?
