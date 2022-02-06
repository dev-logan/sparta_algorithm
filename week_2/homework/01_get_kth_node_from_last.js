class Node {
  constructor(data) {
    this.data = data;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
  }

  append(data) {
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = new Node(data);
  }

  get_kth_node_from_last(k) {
    let cur = this.head;
    let index = 0
    while (cur.next) {
      cur.index = index
      cur = cur.next;
      index++
    }
    let lastIndex = index
    
    let cur2 = this.head;
    while (cur2.index !== lastIndex - k + 1) {
      cur2 = cur2.next;
    }
    return cur2
  }
}

const linked_list = new LinkedList(6)
linked_list.append(7)
linked_list.append(8)

console.log(linked_list.get_kth_node_from_last(2).data)