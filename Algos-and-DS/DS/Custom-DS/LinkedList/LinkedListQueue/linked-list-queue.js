class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    print() {
        if (this.isEmpty()) {
            return null
        } else {
            let curr = this.head;
            let listValues = ""

            while (curr !== this.tail) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            listValues += curr.value
            console.log(listValues)
        }
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;            
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)

        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null
        } else {
            const value = this.head.value
            this.head = this.head.next
            this.size--
            return value
        }
    }

    removeFromEnd() {
        if(this.isEmpty()) {
            return null
        } 
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {

            let curr = this.head;
            let value = this.tail.value

            while(curr !== this.tail) {
                curr = curr.next
            }
            curr.next = null
            this.tail = curr
            this.size--
            return value
        }
    }
}

module.exports = LinkedList