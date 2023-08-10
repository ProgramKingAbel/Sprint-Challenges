/**
 * Stacks with nodes
 */

class Node {
	constructor(value, next_node = null) {
		this.value = value;
		this.next_node = next_node;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	peek() {
		return this.top ? this.top.value : null;
	}

	Append(item)
	{
		const newNode = new Node(item);
		if(isEmpty())
		{
			this.top = newNode;
			this.bottom = newNode;
		}
		else {
			newNode.next_node = this.top; /**confirm*/
			this.top = newNode;
		}
		this.size++
	}
	remove() {
		if (this.isEmpty()) {
			return null;
		}
		this.top = this.top.next_node;
		this.size--;
		return this;

}

/**
 * With arrays
 */

class Stack {
	constructor() {
		this.items = [];
	}
	isEmpty() {
		return this.items.length === 0;
	}
	push(element) {
		return this.items.push(element);
	}
	pop() {
		if (!isEmpty()) {
			this.items.pop();
		}
		return null;
	}
	peek() {
		return this.items[this.items.length - 1);
	}
}

