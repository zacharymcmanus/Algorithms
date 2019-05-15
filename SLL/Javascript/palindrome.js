// Create a new copy of the linked list
// Reverse the newly created linked list
// Compare the original 

function LinkedList () {
    this.head = null;
}

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

LinkedList.prototype.reverse = function () {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;

    for (var i = 0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return this;
}

LinkedList.prototype.isPalindrome = function () {
    if (!this.head || !this.head.next) {
        console.log('No duplicates were found. Empty or a single element Linked List.');
        return ;
    }


}