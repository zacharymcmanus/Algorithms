class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}

	breadthFirstSearch() {
		let currentNode = this.root;
		let list = [];
		let queue = [];

		queue.push(currentNode);
		while(queue.length > 0) {
			currentNode = queue.shift()
			list.push(currentNode.value)
			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}
		return list;
	}

	breadthFirstSearchR(queue, list) {
		if (!queue.length) {
			return list;
		}

		let currentNode = queue.shift();
		list.push(currentNode.value);
		if (currentNode.left) {
			queue.push(currentNode.left);
		}
		if (currentNode.right) {
			queue.push(currentNode.right);
		}
		return this.breadthFirstSearchR(queue, list);
	}

	DFSInOrder() {
		return traverseInOrder(this.root, [])
	}
	DFSPreOrder() {
		return traversePreOrder(this.root, [])
	}
	DFSPostOrder() {
		return traversePostOrder(this.root, [])
	}
}

function traverseInOrder(node, list) {
	if (node.left) {
		traverseInOrder(node.left, list);
	}
	list.push(node.value);
	if (node.right) {
		traverseInOrder(node.right, list);
	}
	return list;
}

function traversePreOrder(node, list) {
	list.push(node.value);
	if (node.left) {
		traversePreOrder(node.left, list);
	}
	if (node.right) {
		traversePreOrder(node.right, list);
	}
	return list;
}

function traversePostOrder(node, list) {
	if (node.left) {
		traversePostOrder(node.left, list);
	}
	if (node.right) {
		traversePostOrder(node.right, list);
	}
	list.push(node.value);
	return list;
}

let bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(20);
bst.insert(1);
bst.insert(6);
bst.insert(15);
bst.insert(170);
// console.log(bst.breadthFirstSearchR([this.root], []));
console.log(bst.DFSInOrder())
console.log(bst.DFSPreOrder())
console.log(bst.DFSPostOrder())
//		9
// 4		20
// 1  6   15  170