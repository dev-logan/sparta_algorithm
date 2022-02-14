function get_melon_best_album(genres, plays) {
    const dict = {}
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i]
        const play = plays[i]
        const index = i

        if (dict[genre]) {
            dict[genre].push([play, index])
        } else {
            dict[genre] = [[play, index]]
        }
    }

    return(
        Object.values(dict)
            .sort((a, b) => {
                const aTotal = a.reduce((total, song) => {
                    total += song[0]
                    return total
                }, 0)
                const bTotal = b.reduce((total, song) => {
                    total += song[0]
                    return total
                }, 0)
                return bTotal - aTotal
            })
            .map((x) => x.sort((a, b) => b[0] - a[0]))
            .reduce((answer, value) => {
                answer.push(value[0][1])
                answer.push(value[1][1])
                return answer
            }, [])
    )
}

console.log(
    '정답 = [4, 1, 3, 0] / 현재 풀이 값 = ',
    get_melon_best_album(
        ['classic', 'pop', 'classic', 'classic', 'pop'],
        [500, 600, 150, 800, 2500]
    )
)
console.log(
    '정답 = [0, 6, 5, 2, 4, 1] / 현재 풀이 값 = ',
    get_melon_best_album(
        ['hiphop', 'classic', 'pop', 'classic', 'classic', 'pop', 'hiphop'],
        [2000, 500, 600, 150, 800, 2500, 2000]
    )
)

// const genres = [
//     'hiphop',
//     'classic',
//     'pop',
//     'classic',
//     'classic',
//     'pop',
//     'hiphop',
// ]
// const plays = [2000, 500, 600, 150, 800, 2500, 2000]

// const genres = ["classic", "pop", "classic", "classic", "pop"]
// const plays = [500, 600, 150, 800, 2500]
