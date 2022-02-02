input = "abacabade"

const alphabet_count = input.split('').reduce((acc, value) => {
    return {
        ...acc,
        [value]: acc[value] ? acc[value] + 1 : 1
    }
},{})

const notRepeatedAlphabets = Object.entries(alphabet_count).filter(x => x[1] === 1).map(x => x[0])

let answer
for (const alphabet of input) {
    if (notRepeatedAlphabets.includes(alphabet)) {
        answer = alphabet
        break
    }
}

console.log(answer)