/**
 * Create a node structure
 */

class Node {
	constructor(value, next_node=null)
	{
		this.data = value;
		this.next_node = next_node
	}

}

/**
 * Define Linked List structure
 */

class LinkedList {
	constructor()
	{
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	add(number) {
		const newNode = new Node(number);
		if (!this.size)
		{
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next_node = newNode;
			this.tail = newNode;

		}
		this.size++;
	}

	get(index) {
		if (index > this.size || index < 0)
		{
			return null;
		}
		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next_node;
		}
		return current; // return current != null ? current.value : null;
	}

	remove (index) {
		if (index < 0 || index > this.length) {
			return null;
		} else if (index == 0)
		{
			this.head = this.head.next_node;
		} else {
			const prev_node = this.get(index - 1);
			prev_node.next_node = prev_node.next_node.next_node;
			if (!prev_node.next_node) {

				this.tail = prev_node;
			}
		}
		this.size--;
	}
	addAt(index, item) {
		if (index < 0 || index > this.size)
		{
			return;
		}
		if (index === 0)
		{
			const newNode = new Node(item, this.head);
			this.head = newNode;
			if (!this.tail) {
				this.tail = newNode;
			}
		}
		else if (index === this.size) {
			this.add(newNode);
		}
		else {
			const prev_node = this.get(index - 1);
			const newNode = new Node(item, prev_node.next_node)
			prev_node.next_node = newNode;
		}
		this.size++;
				
}

