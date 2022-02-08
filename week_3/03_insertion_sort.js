let array = [100,56,-3,32,44]

for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
        if (array[j] > array[j+1]) {
            let temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        } else break
    }
}
console.log(array)