function bfsQueue(graph, startNode) {
    const toVisit = []
    const visited = []

    toVisit.push(startNode)

    while (toVisit.length) {
        const curNode = toVisit.shift()
        visited.push(curNode)
        for (const adjacentNode of graph[curNode]) {
            if (!visited.includes(adjacentNode)) {
                toVisit.push(adjacentNode)
            }
        }
    }

    return visited
}

const graph = {
    1: [2, 3, 4],
    2: [1, 5],
    3: [1, 6, 7],
    4: [1, 8],
    5: [2, 9],
    6: [3, 10],
    7: [3],
    8: [4],
    9: [5],
    10: [6]
}

console.log(bfsQueue(graph, 1))  // 1 이 시작노드입니다!
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 이 출력되어야 합니다!