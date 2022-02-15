class MaxHeap {
    constructor() {
        this.items = [null]
    }

    insert(value) {
        this.items.push(value)
        let index = this.items.length - 1

        while (index > 1) {
            const parentIndex = Math.floor(index / 2)
            const parentValue = this.items[parentIndex]
            if (value > parentValue) {
                this.items[parentIndex] = value
                this.items[index] = parentValue
                index = parentIndex
            } else break
        }
    }
}

const max_heap = new MaxHeap()
max_heap.insert(3)
max_heap.insert(4)
max_heap.insert(2)
max_heap.insert(9)
console.log(max_heap.items)  // [None, 9, 4, 2, 3] 가 출력되어야 합니다!