class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (this.isEmpty) {
            this.head = newNode
            this.tail = newNode
            return
        }
        this.tail.next = newNode
        this.tail = newNode
    }

    dequeue() {
        if (this.isEmpty) throw new Error()
        const oldHead = this.head
        this.head = this.head.next
        return oldHead.data
    }

    peek() {
        if (this.isEmpty) throw new Error()
        return this.head.data
    }

    isEmpty() {
        if (this.head) {
            return false
        } else {
            return true
        }
    }
}