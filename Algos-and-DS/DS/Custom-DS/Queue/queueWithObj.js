class Queue {
	constructor() {
		this.queue = {};
		this.rear = 0;
		this.front = 0;
	}
	enqueue(value) {
		this.queue[this.rear] = value;
		this.rear++;
	}
	dequeue() {
		if (this.isEmpty()) {
			return null
		}
		const item = this.queue[this.front];
		delete this.queue[this.front];
		this.front++;
		return item;
	}

	isEmpty() {
		return this.rear - this.front === 0;
	}

	size() {
		return this.rear - this.front;
	}

	peek() {
	 return this.queue[this.front];
	}

	print() {
		console.log(this.queue)
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
