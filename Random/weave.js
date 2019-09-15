// Weave receives two queues as arguements and combines the contents of each into a new, third queue. The third queue should contain the *alternating* content of the two queues. The function should handle queues of different lengths without insertings 'undefined' in the new one. 
// Example:
//	const queueOne = new Queue(); 
//	queueOne.add(1);
// 	queueOne.add(2);

class Queue {
	constructor() {
		this.data = [];
	}

	add(record) {
		this.data.unshift(record);
	}

	remove() {
		this.data.pop();
	}

	peek() {
		return this.data[this.data.length - 1];
	}
}

function weave(sourceOne, sourceTwo) {
	const q = new Queue();

	while (sourceOne.peek() || sourceTwo.peek()) {
		if (sourceOne.peek()) {
			q.add(sourceOne.remove())
		}
		if (sourceTwo.peek()) {
			q.add(sourceTwo.remove())
		}
	}

	return q;
}

console.log(weave([1,2,3], [4,5,6]));