class Node {
    constructor(data) {
        this.data = data
        // this.next = null
    }
}

// const node = new Node(3)
// const first_node =  new Node(4)
// node.next = first_node

// console.log(node.next.data)

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