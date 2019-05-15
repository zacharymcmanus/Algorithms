class BST {
    constructor() {
        this.root = null;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value && this.left) {
            this.left.insert(value);
        } else if (value < this.value) {
            this.left = new Node(value);
        } else if (value > this.value && this.right) {
            this.right.insert(value);
        } else if (value > this.value) {
            this.right = new Node(value);
        }
    }

    contains(value) {
        if (this.value === value) {
            return this;
        }

        if (this.value < value && this.right) {
            return this.right.contains(value);
        } else if (this.value > value && this.left) {
            return this.left.contains(data);
        }

        return null;
    }
}

var tree = new BST();
tree.insert(20);
console.log(tree);
