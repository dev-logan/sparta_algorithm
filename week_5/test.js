const visited = []
for (let i = 0; i < 200000; i++) {
	visited.push({})
}
if (!visited[0][1]) {
    visited[0][1] = true
}


console.log(visited)