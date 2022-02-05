class Node {
    constructor(data) {
        this.data = data
    }
}

class LinkedList {
    constructor(data) {
        this.head = new Node(data)
    }

    append(data) {
        let cur = this.head
        while (cur.next) {
            cur = cur.next
        }
        cur.next = new Node(data)
    }

    print_all() {
        let cur = this.head
        while (cur) {
            console.log(cur.data)
            cur = cur.next
        }
    }

    get_node(index) {
        let cur = this.head
        let count = 0
        while (count < index) {
            cur = cur.next
            count++
        }
        return cur
    }

    add_node(index, value) {
        if (index === 0) {
            let newNode = new Node(value)
            newNode.next = this.head
            this.head = newNode
            return
        }
        let beforeNode = this.get_node(index - 1)
        let afterNode = beforeNode.next
        beforeNode.next = new Node(value)
        beforeNode.next.next = afterNode
    }

    delete_node(index) {
        if (index === 0) {
            this.head = this.get_node(index + 1)
            return
        }
        let beforeNode = this.get_node(index - 1)
        let afterNode = this.get_node(index + 1)
        beforeNode.next = afterNode
    }
}

const linked_list = new LinkedList(5)
linked_list.append(12)
linked_list.append(8)
linked_list.append(9)
linked_list.append(7)

// linked_list.delete_node(9)

linked_list.print_all()