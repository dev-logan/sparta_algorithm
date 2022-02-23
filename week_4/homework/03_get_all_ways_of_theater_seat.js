function get_all_ways_of_theater_seat(count, vip) {
	const fibo_memo = {
        0: 1,
        1: 1,
        2: 2,
    }
    
    for (let i = 3; i <= count; i++) {
        fibo_memo[i] = fibo_memo[i - 1] + fibo_memo[i - 2]
    }
    
    if (vip.length === 0) {
        console.log(fibo_memo[count])
        return
    }
    
    const seatGroups = [vip[0] - 1, count - vip[vip.length - 1]]
    for (let i = 1; i < vip.length; i++) {
        seatGroups.push(vip[i] - vip[i - 1] - 1)
    }
    
    return (seatGroups.reduce((acc, value) => acc * fibo_memo[value], 1))
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
