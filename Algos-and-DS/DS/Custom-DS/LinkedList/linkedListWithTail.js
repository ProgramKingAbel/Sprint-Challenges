class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}
	isEmpty() {
		return this.size === 0
	}

	getSize() {
		return this.size
	}
	print() {
		if (this.isEmpty()) {
			console.log("the list is empty");
		} else {
			let curr = this.head
			let result = ""
			while (curr.next) {
				result += `${curr.value} `
				curr = curr.next
			}
			result += curr.value
			console.log(result)
		}
	}
	prepend(value) {
		const node = new Node(value)

		if (this.isEmpty()) {
			this.head = node
			this.tail = node
		} else {
			node.next = this.head
			this.head = node

		}
		this.size++
	}
	// O(1)
	append(value) {
		const node = new Node(value)

		if (this.isEmpty()) {
			this.head = node
			this.tail = node
		}
		else {
			this.tail.next = node
			this.tail = node
		}
		this.size++
	}
	removeFromFront() {
		if (this.isEmpty()) {
			console.log("List is empty")
		} else {
			const value = this.head.value
			this.head = this.head.next
			this.size--
			return value
		}
	}
	removeFromEnd() {
		if (this.isEmpty()) {
			console.log("List is empty")
		} 
		const value = this.tail.value
		if (this.size === 1) {
			this.head = null
			this.tail = null
		} else {
			let prev = this.head
			while (prev.next !== this.tail) { 
				prev = prev.next
			}
			prev.next = null
			this.tail = prev
		}
		this.size--
		return value
	}


}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.prepend(0)

list.print()
console.log("List size is ", list.getSize());

list.removeFromFront()
list.removeFromEnd()
 list.print()
