const array = [4, 6, 2, 9, 1]

function selectionSort(array) {
    if (array.length === 1) {
        return array
    }
    for (let i = 1; i <= array.length - 1; i++) {
        if (array[i] < array[0]) {
            let temp = array[0]
            array[0] = array[i]
            array[i] = temp
        }
    }
    return [array[0], ...selectionSort(array.slice(1))]
}

console.log(selectionSort(array))