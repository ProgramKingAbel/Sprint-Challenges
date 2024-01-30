class Queue {
	constructor() {
		this.queue = [];
	}

	enqueue(value) {
		return this.queue.push(value);
	}

	dequeue() {
		return this.queue.shift();
	}

	isEmpty() {
		return this.queue.length === 0;
	}

	size() {
		return this.queue.length;
	}

	peek() {
		if (!this.isEmpty()) {
			return this.queue[0];
		}
		return null
	}
	print() {
		console.log(this.queue.toString());
	}
}

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log(myQueue.size());
myQueue.print();


console.log(myQueue.dequeue());
console.log(myQueue.peek());
