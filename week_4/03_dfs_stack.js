function dfsStack(graph, startNode) {
    const toVisit = []
    const visited = []

    toVisit.push(startNode)

    while (toVisit.length) {
        const curNode = toVisit.pop()
        visited.push(curNode)
        for (const adjacentNode of graph[curNode]) {
            if (!visited.includes(adjacentNode)) {
                toVisit.push(adjacentNode)
            }
        }
    }

    return visited
}

// 위의 그래프를 예시로 삼아서 인접 리스트 방식으로 표현했습니다!
const graph = {
    1: [2, 5, 9],
    2: [1, 3],
    3: [2, 4],
    4: [3],
    5: [1, 6, 8],
    6: [5, 7],
    7: [6],
    8: [5],
    9: [1, 10],
    10: [9],
}

console.log(dfsStack(graph, 1)) // 1 이 시작노드입니다!
// [1, 9, 10, 5, 8, 6, 7, 2, 3, 4] 이 출력되어야 합니다!
