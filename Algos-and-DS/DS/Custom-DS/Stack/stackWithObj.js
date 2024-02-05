class Stack {
	constructor() {
		this.items = {};
		this.topItem = 0;
	}
	push(item) {
		this.items[this.topItem] = item;
		this.topItem += 1;
	}
	pop() {
		const item = this.items[this.topItem - 1];
		delete this.items[this.topItem - 1];
		this.topItem -= 1;

		return item;
	}
	isEmpty() {
		return this.topItem === 0;
	}
	size() {
		return this.topItem;
	}

	peek() {
		return this.items[this.topItem - 1];
	}
	print() {
		console.log(this.items);
	}
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.size());
stack.print();
console.log(`pop: ${ stack.pop() }`);
console.log(stack.peek());
stack.print();
