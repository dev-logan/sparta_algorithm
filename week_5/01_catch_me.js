class Queue {
	constructor() {
		this.storage = {}
		this.front = 0
		this.rear = 0
	}

	size() {
		if (this.storage[this.rear] === undefined) {
			return 0
		} else {
			return this.rear - this.front + 1
		}
	}

	add(value) {
		if (this.size() === 0) {
			this.storage['0'] = value
		} else {
			this.rear += 1
			this.storage[this.rear] = value
		}
	}

	popleft() {
		let temp
		if (this.front === this.rear) {
			temp = this.storage[this.front]
			delete this.storage[this.front]
			this.front = 0
			this.rear = 0
		} else {
			temp = this.storage[this.front]
			delete this.storage[this.front]
			this.front += 1
		}
		return temp
	}
}

// DFS와 DP가 혼합된 문제

let cony = 550
let brown = 500

const queue = new Queue()
queue.add(brown)

let runaway = 1
let time = 1
let endCheck = false

const visited = []
for (let i = 0; i < 200000; i++) {
	visited.push({})
}

while (!endCheck) {
	cony += runaway++
	time++

    if (cony > 200000) break

	const size = queue.size()
	for (let i = 0; i < size; i++) {
		const toCalculate = queue.popleft()

		if (
			cony === toCalculate - 1 ||
			cony === toCalculate + 1 ||
			cony === toCalculate * 2
		) {
			endCheck = true
			break
		}

		if (toCalculate - 1 >= 0 && toCalculate - 1 <= 200000) {
			if (!visited[toCalculate - 1][time]) {
				queue.add(toCalculate - 1)
				visited[toCalculate - 1][time] = true
			}
		}

        if (toCalculate + 1 >= 0 && toCalculate + 1 <= 200000) {
			if (!visited[toCalculate + 1][time]) {
				queue.add(toCalculate + 1)
				visited[toCalculate + 1][time] = true
			}
		}

        if (toCalculate * 2 >= 0 && toCalculate * 2 <= 200000) {
			if (!visited[toCalculate * 2][time]) {
				queue.add(toCalculate * 2)
				visited[toCalculate * 2][time] = true
			}
		}
	}
}
console.log(time - 1)
