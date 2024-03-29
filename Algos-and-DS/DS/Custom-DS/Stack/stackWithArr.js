class Stack {
	constructor() {
		this.items = [];
	}
	push(item) {
		return this.items.push(item);
	}
	pop() {
		if (!this.isEmpty()) {
			return this.items.pop();
		}
		return null;
	}
	isEmpty() {
		return this.items.length === 0;
	}
	peek() {
		return this.items[this.items.length - 1];

	}
	size() {
		return this.items.length;
	}
	print() {
		console.log(this.items.toString());
	}

}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.size());
stack.print();

console.log(stack.pop());
console.log(stack.peek());
stack.print();
