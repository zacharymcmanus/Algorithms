class MinStack {
	constructor() {
		this.storage = [];
		this.minStorage = [];
	}

	push(item) {
		this.storage.push(item);

		if (this.minStorage.length === 0) {
			this.minStorage.push(item)
		} else if (item < this.min()) {
			this.minStorage.push(item);
		} else {
			let minItem = this.min();
			this.minStorage.push(minItem);
		}
	}

	pop() {
		this.minStorage.pop();
		return this.storage.pop();
	}

	peek() {
		return this.storage([this.storage.length - 1])
	}

	min() {
		return this.minStorage([this.minStorage.length - 1])
	}
}