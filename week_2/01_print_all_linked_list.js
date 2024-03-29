class Node {
    constructor(data) {
        this.data = data
        // this.next = null
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
}

const linked_list = new LinkedList(5)
linked_list.append(12)
linked_list.append(8)
linked_list.print_all()