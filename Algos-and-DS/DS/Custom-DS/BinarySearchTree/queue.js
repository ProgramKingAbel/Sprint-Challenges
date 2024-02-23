class Queue {
    constructor() {
        this.queue = {}
        this.rear = 0;
        this.front = 0;
    }

    enqueue(value) {
        this.queue[this.rear] = value
        this.rear++
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        const item = this.queue[this.front]
        delete this.queue[this.front] 
        this.front++  
        return item     
    }
    isEmpty() {
        return this.rear - this.front === 0
    }

}

module.exports = Queue