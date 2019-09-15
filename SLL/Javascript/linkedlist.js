class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		// this.head = new Node(data, this.head);

		this.insertAt(data, 0);
	}

	size() {
		let counter = 0;
		let node = this.head;

		while(node) {
			counter++;
			node = node.next;
		}

		return counter;
	}

	getFirst() {
		// return this.head;
		return this.getAt(0);
	}

	getLast() {
		// if (!this.head) {
		// 	return null;
		// }

		// let node = this.head;
		// while (node) {
		// 	if (!node.next) {
		// 		return node;
		// 	}
		// 	node = node.next;
		// }

		return this.getAt(this.size() - 1);
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) {
			return null;
		}

		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) {
			return;
		}

		if (!this.head.next) {
			this.head = null;
			return;
		}

		let previous = this.head;
		let node = this.head.next;
		while (node.next) {
			previous = node;
			node = node.next;
		}
		previous.next = null;
	}

	insertLast(data) {
		const last = this.getLast();

		if (last) {
			// there are some existing nodes in our chain
			last.next = new Node(data);
		} else {
			// the chain is empty
			this.head = new Node(data);
		}
	}

	getAt(index) {
		let counter = 0;
		let node = this.head;
		while (node) {
			if (counter === index) {
				return node;
			} 

			counter++;
			node = node.next;
		}
		return null;
	}

	removeAt(index) {
		if (!head) {
			return;
		}

		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		const previous = this.getAt(index - 1);
		if (!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next;
	}

	insertAt(data, index) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (index === 0) {
			this.head = new Node(data, this.head)
		}

		const previous = this.getAt(index - 1) || this.getLast();
		const node = new Node(data, previous.next);
		previous.next = node;
	}

	midpoint(list) {
		let slow = list.getFirst();
		let fast = list.getFirst();

		while (fast.next && fast.next.next) {
			slow = slow.next;
			fast = fast.next.next;
		}

		return slow;
	}
}

const ll = new LinkedList();
ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);
ll.removeFirst();
console.log(ll);

// console.log(ll.size());
// console.log(ll.getFirst());
// console.log(ll.getLast());