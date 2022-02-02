input = "0001100"

let reserve = input[0]
let count = 0
for (const digit of input) {
    if (digit !== reserve) {
        count++
    }
    reserve = digit
}
if (count % 2 === 0) {
    console.log(count / 2)
} else {
    console.log((count + 1) / 2)
}