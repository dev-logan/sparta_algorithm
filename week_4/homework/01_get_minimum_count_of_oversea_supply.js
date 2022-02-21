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

			if (
				left <= this.items.length - 1 &&
				this.items[left] > this.items[maxIndex]
			) {
				maxIndex = left
			}

			if (
				right <= this.items.length - 1 &&
				this.items[right] > this.items[maxIndex]
			) {
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

function get_minimum_count_of_overseas_supply(stock, dates, supplies, k) {
	const need = k - stock
	const heap = new MaxHeap()
	for (const supply of supplies) {
		heap.insert(supply)
	}
	let sum = 0
	let count = 0
	while (sum < need) {
		sum += heap.delete()
		count++
	}
	return count
}

const ramen_stock = 4
const supply_dates = [4, 10, 15]
const supply_supplies = [20, 5, 10]
const supply_recover_k = 30

console.log(get_minimum_count_of_overseas_supply(ramen_stock, supply_dates, supply_supplies, supply_recover_k))
console.log("정답 = 2 / 현재 풀이 값 = ", get_minimum_count_of_overseas_supply(4, [4, 10, 15], [20, 5, 10], 30))
console.log("정답 = 4 / 현재 풀이 값 = ", get_minimum_count_of_overseas_supply(4, [4, 10, 15, 20], [20, 5, 10, 5], 40))
console.log("정답 = 1 / 현재 풀이 값 = ", get_minimum_count_of_overseas_supply(2, [1, 10], [10, 100], 11))
