/**
 *  Homework 11 - Trie
 *
 *  TrieNode class
 *
 *  Prompt:    Create a TrieNode class
 *             The TrieNode class should contain the following properties:
 *
 *                 value:   {Character} - default null
 *                  next:   {HashTable}
 *                   end:   {Boolean}
 *
 *
 *               Example:   let sample = new TrieNode("b")
 *                          sample.value     // "b"
 *                          sample.end       // false
 *
 *  Trie class
 *
 *  Prompt:     Create a Trie class
 *              The Trie class should contain the following properties:
 *
 *                  root:   {TrieNode}
 *
 *              The Trie class should also contain the following methods:
 *
 *                insert:   A method that adds a word.
 *
 *                          Input:     word {String}
 *                          Output:    {undefined}
 *
 *                isWord:   A method that checks whether a word is in the trie.
 *
 *                          Input:     word {String}
 *                          Output:    {Boolean}
 *
 *              isPrefix:   A method that checks whether an input is a prefix of
 *                          a word in the string.
 *
 *                          Input:     word {String}
 *                          Output:    {Boolean}
 *
 *            startsWith:   A method that returns all words that starts with an
 *                          input word.
 *
 *                          Input:     word {String}
 *                          Output:    {Array of Strings}
 *
 *          EXTRA CREDIT:
 *                remove:   Removes a word from the trie.
 *
 *                          Input:     word {String}
 *                          Output:    {undefined}
 * 
 *
 */

'use strict';


class TrieNode {
  constructor(value) {
    this.value = value || null;
    this.next = {};
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    let wordIndex = 0;

    while(wordIndex < word.length) {
      const char = word[wordIndex];
      if(current.next.hasOwnProperty(char)) {
        current = current.next[char];
      } else {
        let newNode = new TrieNode(char);
        current.next[char] = newNode;
        current = current.next[char];
      }
      wordIndex++;
    } 
    current.end = true;
  }

  isWord(word) {
    let current = this.root;
    let wordIndex = 0;

    while (wordIndex < word.length) {
      const char = word[wordIndex];
      if (current.next.hasOwnProperty(char)) {
        current = current.next[char];
      } else {
        return false;
      }
      wordIndex++;
    }

    return current.end;    
  }

  isPrefix(word) {
    let current = this.root;
    let prev;
    let wordIndex = 0;

    while (wordIndex < word.length) {
      const char = word[wordIndex];
      if (current.next.hasOwnProperty(char)) {
        prev = current;
        current = current.next[char];
      } else {
        return false;
      }
      wordIndex++;
    }

    return prev;
  }
  
  startsWith(word) {
    const prefix = this.isPrefix(word);
    if(!prefix) return []; 
    const result = [];

    function helper(node, path) {
      if(!node) {
        return;
      }
      
      if(node.end) {
        result.push(path.slice());
        return;
      }

      for (let key in node.next) {
        //console.log(`Path ${path} - Key ${key}`)
        helper(node.next[key], path + key);
      }
    }

    //console.log("prefix", prefix);
   
    helper(prefix, word.slice(0, word.length - 1));

    console.log("result", result)
    return result;
  }

  remove(word) {
    // YOUR WORK HERE
  }

}


////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


function assert(count, name, test) {
  if (!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  let pass = 'false';
  let errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch (e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0, 5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}

// function for checking if arrays contain same elements
// (do not need to be in the same order)
function arraysMatching(arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }

  let cache = {};
  for (let i = 0; i < arr1.length; i++) {
    if (cache[arr1[i]] === undefined) {
      cache[arr1[i]] = 1;
    } else {
      cache[arr1[i]]++;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (cache[arr2[j]] === undefined || cache[arr2[j]] === 0) { return false; }
    cache[arr2[j]]--;
  }
  return true;
}

console.log('TrieNode Class');
let testCount = [0, 0];

assert(testCount, 'able to create an instance', () => {
  let node = new TrieNode();
  return typeof node === 'object';
});

assert(testCount, 'has value property', () => {
  let node = new TrieNode();
  return node.hasOwnProperty('value');
});

assert(testCount, 'has default value set to null', () => {
  let node = new TrieNode();
  return node.value === null;
});

assert(testCount, 'able to assign a value upon instantiation', () => {
  let node = new TrieNode('c');
  return node.value === 'c';
});

assert(testCount, 'has an end property', () => {
  let node = new TrieNode();
  return node.hasOwnProperty('end');
});

assert(testCount, 'end property initially instantiated to false', () => {
  let node = new TrieNode();
  return node.end === false;
});

assert(testCount, 'able to assign an end value upon instantiation', () => {
  let node = new TrieNode();
  node.end = true;
  return node.end === true;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Trie Class');
testCount = [0, 0];

assert(testCount, 'able to create an instance', () => {
  let trie = new Trie();
  return typeof trie === 'object';
});

assert(testCount, 'has root property', () => {
  let trie = new Trie();
  return trie.hasOwnProperty('root');
});

assert(testCount, 'has root property, is a TrieNode', () => {
  let trie = new Trie();
  return typeof trie.root === 'object';
});

assert(testCount, 'root node value is set to null', () => {
  let trie = new Trie();
  return trie.root !== undefined && trie.root.value === null;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Trie Insert Method');
testCount = [0, 0];

assert(testCount, 'has insert method', () => {
  let trie = new Trie();
  return Object.prototype.toString.apply(trie.insert) === '[object Function]';
});

assert(testCount, 'able to insert a word into empty trie', () => {
  let trie = new Trie();
  trie.insert('cat');
  return trie.root !== undefined &&
    trie.root.next.c !== undefined &&
    trie.root.next.c.next.a !== undefined &&
    trie.root.next.c.next.a.next.t !== undefined &&
    trie.root.next.c.next.a.next.t.end === true;
});

assert(testCount, 'able to insert words that overlap into trie', () => {
  let trie = new Trie();
  trie.insert('cat');
  trie.insert('cats');
  return trie.root !== undefined &&
    trie.root.next.c !== undefined &&
    trie.root.next.c.next.a !== undefined &&
    trie.root.next.c.next.a.next.t !== undefined &&
    trie.root.next.c.next.a.next.t.next.s !== undefined &&
    trie.root.next.c.next.a.next.t.end === true &&
    trie.root.next.c.next.a.next.t.next.s.end === true;
});


console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Trie IsWord Method');
testCount = [0, 0];

assert(testCount, 'has isWord method', () => {
  let trie = new Trie();
  return Object.prototype.toString.apply(trie.isWord) === '[object Function]';
});

assert(testCount, 'should return false for an empty string as input', () => {
  let trie = new Trie();
  return trie.isWord('') === false;
});

assert(testCount, 'should return true for a word that exists', () => {
  let trie = new Trie();
  trie.insert('cat');
  return trie.isWord('cat') === true;
});

assert(testCount, 'should return false for a word that does not exist', () => {
  let trie = new Trie();
  trie.insert('cat');
  return trie.isWord('ca') === false;
});

assert(testCount, 'should return true for a word that exists within larger word', () => {
  let trie = new Trie();
  trie.insert('cat');
  trie.insert('cats');
  return trie.isWord('cat') === true;
});

assert(testCount, 'should return true for a word that is a larger word', () => {
  let trie = new Trie();
  trie.insert('cat');
  trie.insert('cats');
  return trie.isWord('cats') === true;
});

assert(testCount, 'should return false if a smaller word was not added, but exists in a larger word', () => {
  let trie = new Trie();
  trie.insert('cats');
  return trie.isWord('cat') === false;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Trie StartsWith Method');
testCount = [0, 0];

assert(testCount, 'has startsWith method', () => {
  let trie = new Trie();
  return Object.prototype.toString.apply(trie.startsWith) === '[object Function]';
});

assert(testCount, 'returns an empty array if no words start with input', () => {
  let trie = new Trie();
  let result = trie.startsWith('cat');
  return Array.isArray(result) &&
    result.length === 0;
});

assert(testCount, 'returns correct prefixes including input that is a word', () => {
  let trie = new Trie();
  trie.insert('cat');
  trie.insert('cats');
  trie.insert('catnip');
  trie.insert('car');
  trie.insert('cars');
  let results = trie.startsWith('car');
  return results !== undefined && arraysMatching(results, ['car', 'cars']);
});

assert(testCount, 'returns the correct prefixes', () => {
  let trie = new Trie();
  trie.insert('cat');
  trie.insert('cats');
  trie.insert('catnip');
  trie.insert('car');
  trie.insert('cars');
  let results = trie.startsWith('ca');
  return results !== undefined && arraysMatching(results, ['cat', 'cats', 'catnip', 'car', 'cars']);
});

assert(testCount, 'returns all words if input is empty string', () => {
  let trie = new Trie();
  trie.insert('cat');
  trie.insert('cats');
  trie.insert('catnip');
  trie.insert('foo');
  trie.insert('hello');
  trie.insert('hell');
  trie.insert('he');
  let results = trie.startsWith('');
  return results !== undefined && arraysMatching(results, ['cat', 'cats', 'catnip', 'foo', 'hello', 'hell', 'he']);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Remove Method');
testCount = [0, 0];

assert(testCount, 'has remove method', () => {
  let trie = new Trie();
  return Object.prototype.toString.apply(trie.remove) === '[object Function]';
});

assert(testCount, 'removes a word that exists', () => {
  let trie = new Trie();
  trie.insert('cat');
  trie.remove('cat');
  return trie.isWord('cat') === false &&
    (trie.root.next.c === undefined || trie.root.next.c === null);
});

assert(testCount, 'does not remove a word that does not exist', () => {
  let trie = new Trie();
  trie.insert('cat');
  trie.remove('c');
  return trie.isWord('cat') === true;
});

assert(testCount, 'does not remove letters that belong to a longer word', () => {
  let trie = new Trie();
  trie.insert('hello');
  trie.insert('hell');
  trie.insert('he');
  trie.remove('hell');
  return trie.isWord('he') === true &&
    trie.isWord('hello') === true &&
    trie.isWord('hell') === false;
});


assert(testCount, 'removes letters from longer word and keeps shorter letters', () => {
  let trie = new Trie();
  trie.insert('cat');
  trie.insert('cats');
  trie.insert('catnip');
  trie.remove('catnip');
  return trie.isWord('cat') === true &&
    trie.isWord('cats') === true &&
    trie.isWord('catnip') === false &&
    (trie.root.next.c.next.a.next.t.next.n === undefined ||
      trie.root.next.c.next.a.next.t.next.n === null);
});


console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');
