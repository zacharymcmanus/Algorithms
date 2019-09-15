class Stack {
	constructor() {
		this.data = [];
	}

	push(record) {
		this.data.push(record)
	}

	pop() {
		return this.data.pop();
	}

	peek() {
		return this.data[this.data.length - 1]
	}

	// min() {
	// 	for (var i = 0; i < this.data.length; i++) {
	// 		if (this.data.length[i] < )
	// 	}
	// }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.data)
console.log(stack.min());