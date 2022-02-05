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
        if (index === 0) {
            return this.head.data
        }
        let cur = this.head
        for (let i = 1; i <= index; i++) {
            cur = cur.next
        }
        return cur.data
    }
}

const linked_list = new LinkedList(5)
linked_list.append(12)
linked_list.append(8)
linked_list.append(9)
linked_list.append(7)
linked_list.print_all()
console.log(linked_list.get_node(4))