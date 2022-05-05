class Queue {
	items = [];
	enqueue(element) {
		this.items.push(element);
	}

	dequeue() {
		return this.items.shift();
	}

	front() {
		return this.items[0];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	size() {
		return this.items.length;
	}

	toString() {
		return this.items.join(' ');
	}
}

let queue = new Queue();
