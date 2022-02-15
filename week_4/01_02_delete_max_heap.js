class MaxHeap {
    constructor() {
        this.items = [null]
    }

    insert(value) {
        this.items.push(value)
        let index = this.items.length - 1

        while (index > 1) {
            const parentIndex = Math.floor(index / 2)
            if (this.items[index] > this.items[parentIndex]) {
                const temp = this.items[parentIndex]
                this.items[parentIndex] = this.items[index]
                this.items[index] = temp
                index = parentIndex
            } else break
        }
    }

    delete() {
        const firstNode = this.items[1]
        this.items[1] = this.items[this.items.length - 1]
        this.items[this.items.length - 1] = firstNode
        this.items.pop()

        let index = 1

        while (index <= this.items.length - 1) {
            const left = index * 2
            const right = index * 2 + 1
            let maxIndex = index
            
            if (left <= this.items.length - 1 && this.items[left] > this.items[maxIndex]) {
                maxIndex = left
            }

            if (right <= this.items.length - 1 && this.items[right] > this.items[maxIndex]) {
                maxIndex = right
            }

            if (maxIndex === index) break

            const temp = this.items[maxIndex]
            this.items[maxIndex] = this.items[index]
            this.items[index] = temp

            index = maxIndex
        }

        return firstNode
    }
}

const max_heap = new MaxHeap()
max_heap.insert(8)
max_heap.insert(6)
max_heap.insert(7)
max_heap.insert(2)
max_heap.insert(5)
max_heap.insert(4)
console.log(max_heap.items)  // [None, 8, 6, 7, 2, 5, 4]
console.log(max_heap.delete())  // 8 을 반환해야 합니다!
console.log(max_heap.items)  // [None, 7, 6, 4, 2, 5]