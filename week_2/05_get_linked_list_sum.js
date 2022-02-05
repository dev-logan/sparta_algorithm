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

  print_all() {
    let cur = this.head;
    while (cur) {
      console.log(cur.data);
      cur = cur.next;
    }
  }

  get_node(index) {
    let cur = this.head;
    let count = 0;
    while (count < index) {
      cur = cur.next;
      count++;
    }
    return cur;
  }

  add_node(index, value) {
    if (index === 0) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let beforeNode = this.get_node(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = new Node(value);
    beforeNode.next.next = afterNode;
  }

  delete_node(index) {
    if (index === 0) {
      this.head = this.get_node(index + 1);
      return;
    }
    let beforeNode = this.get_node(index - 1);
    let afterNode = this.get_node(index + 1);
    beforeNode.next = afterNode;
  }
}

function get_linked_list_sum(linked_list_1, linked_list_2) {
    let linked_lists = [linked_list_1, linked_list_2];
    let sum = 0
    for (let linked_list of linked_lists) {
      let num = "";
      let cur = linked_list.head;
      while (cur) {
        num += String(cur.data);
        cur = cur.next;
      }
      sum += +num
    }
    return sum
}

const linked_list_1 = new LinkedList(6);
linked_list_1.append(7);
linked_list_1.append(8);

const linked_list_2 = new LinkedList(3);
linked_list_2.append(5);
linked_list_2.append(4);

console.log(get_linked_list_sum(linked_list_1, linked_list_2));
