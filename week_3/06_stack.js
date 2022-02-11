class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.head = null
    }

    push(value) {
        const toPush = new Node(value)
        toPush.next = this.head
        this.head = toPush
    }

    pop() {
        if (this.isEmpty) {
            throw new Error('The stack is empty.')
        }
        const popValue = this.head.data
        this.head = this.head.next
        return popValue
    }

    peek() {
        if (this.isEmpty) {
            throw new Error('The stack is empty.')
        }
        return this.head.data
    }

    isEmpty() {
        if (!this.head) return true
        else return false
    }
}