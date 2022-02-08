const array = [4, 6, 9, 2, 1]

for (let i = 3; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
        let a = array[j]
        let b = array[j+1]
        if (a > b) {
            array[j] = b
            array[j+1] = a
        }
    }
}

console.log(array)