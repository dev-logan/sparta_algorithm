const current_r = 7
const current_c = 4
const current_d = 0
const current_room_map = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
	[1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
	[1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

function get_count_of_departments_cleaned_by_robot_vacuum(h, w, d, map) {
	// 북 동 남 서
	const dh = [-1, 0, 1, 0]
	const dw = [0, 1, 0, -1]

	let count = 0
	while (true) {
		// 현재 칸 청소
		if (map[h][w] !== -1) {
			map[h][w] = -1
			count++
		}

		// 방향 정의
		const left_d = d === 0 ? 3 : d - 1
		const right_d = d === 3 ? 0 : d + 1
		let back_d
		if (d === 2) {
			back_d = 0
		} else if (d === 3) {
			back_d = 1
		} else {
			back_d = d + 2
		}

		const left_dh = dh[left_d]
		const left_dw = dw[left_d]
		const right_dh = dh[right_d]
		const right_dw = dw[right_d]
		const back_dh = dh[back_d]
		const back_dw = dw[back_d]
		const front_dh = dh[d]
		const front_dw = dw[d]

		// 왼쪽 칸의 숫자 확인
		if (map[h + left_dh][w + left_dw] === 0) {
			d = left_d
			h += left_dh
			w += left_dw
		} else if (
			map[h + left_dh][w + left_dw] !== 0 &&
			map[h + right_dh][w + right_dw] !== 0 &&
			map[h + front_dh][w + front_dw] !== 0 &&
			map[h + back_dh][w + back_dw] !== 0
		) {
			if (map[h + back_dh][w + back_dw] === 1) {
				break
			} else if (map[h + back_dh][w + back_dw] === -1) {
				h += dh[back_d]
				w += dw[back_d]
			}
		} else {
			d = left_d
		}
	}
	return count
}

// 57 가 출력되어야 합니다!
console.log(
	get_count_of_departments_cleaned_by_robot_vacuum(
		current_r,
		current_c,
		current_d,
		current_room_map
	)
)
const current_room_map2 = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
	[1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
	[1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
console.log(
	'정답 = 29 / 현재 풀이 값 = ',
	get_count_of_departments_cleaned_by_robot_vacuum(6, 3, 1, current_room_map2)
)
const current_room_map3 = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
	[1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
	[1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
	[1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
console.log(
	'정답 = 33 / 현재 풀이 값 = ',
	get_count_of_departments_cleaned_by_robot_vacuum(7, 4, 1, current_room_map3)
)
const current_room_map4 = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
	[1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
	[1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
	[1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
	[1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
console.log(
	'정답 = 25 / 현재 풀이 값 = ',
	get_count_of_departments_cleaned_by_robot_vacuum(6, 2, 0, current_room_map4)
)
