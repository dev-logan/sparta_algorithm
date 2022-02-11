const heights = [6, 9, 5, 7, 4]

function get_receiver_top_orders(heights) {
    const answer = []
    while (true) {
        if (heights.length === 1) {
            answer.push(0)
            break
        }
        const lastTower = heights.pop()

        for (let i = heights.length - 1; i >= 0; i--) {
            if (heights[i] > lastTower) {
                answer.push(i + 1)
                break
            }
            if (i === 0) {
                answer.push(0)
            }
        }
    }

    return answer.reverse()
}

console.log(get_receiver_top_orders(heights))  // [0, 0, 2, 2, 4] 가 반환되어야 한다!

console.log("정답 = [0, 0, 2, 2, 4] / 현재 풀이 값 = ",get_receiver_top_orders([6,9,5,7,4]))
console.log("정답 = [0, 0, 0, 3, 3, 3, 6] / 현재 풀이 값 = ",get_receiver_top_orders([3,9,9,3,5,7,2]))
console.log("정답 = [0, 0, 2, 0, 0, 5, 6] / 현재 풀이 값 = ",get_receiver_top_orders([1,5,3,6,7,6,5]))