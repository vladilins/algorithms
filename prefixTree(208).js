class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (!node[c]) node[c] = {};
      node = node[c]; //?
    }
    node.isTerminal = true;
  }

  search(word, isPrefix) {
    let node = this.root;
    for (let c of word) {
      if (!node[c]) return false;
      node = node[c]; //?
    }
    return isPrefix || !!node.isTerminal;
  }

  startsWith(prefix) {
    return this.search(prefix, true);
  }
}

const trie = new Trie();
trie.insert("apple");
trie.search("apple"); //?
trie.search("app"); //?
trie.startsWith("app"); //?
trie.insert("app");
trie.search("app"); //?
