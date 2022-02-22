function fibo(n, fibo_memo) {
	if (!fibo_memo[n]) {
		return (fibo_memo[n] = fibo(n - 2, fibo_memo) + fibo(n - 1, fibo_memo))
	} else {
		return fibo_memo[n]
	}
}

function get_all_ways_of_theater_seat(count, vip) {
	const seatGroups = [vip[0] - 1, count - vip[vip.length - 1]]
	for (let i = 1; i < vip.length; i++) {
		seatGroups.push(vip[i] - vip[i - 1] - 1)
	}
	const fibo_memo = {
		1: 1,
		2: 2,
	}
	let result = 1
	for (const seat of seatGroups) {
		result *= fibo(seat, fibo_memo)
	}
	return result
}

const count = 9
const vip = [4, 7]

// 12가 출력되어야 합니다!
console.log(get_all_ways_of_theater_seat(count, vip))

console.log(
	'정답 = 4 / 현재 풀이 값 = ',
	get_all_ways_of_theater_seat(9, [2, 4, 7])
)
console.log(
	'정답 = 26 / 현재 풀이 값 = ',
	get_all_ways_of_theater_seat(11, [2, 5])
)
console.log(
	'정답 = 6 / 현재 풀이 값 = ',
	get_all_ways_of_theater_seat(10, [2, 6, 9])
)
